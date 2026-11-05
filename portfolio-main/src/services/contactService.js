import { EMAIL, mailto } from '../data/socialLinks';

/**
 * Contact delivery layer. The form only calls `sendContactMessage()`, so the
 * delivery method can change without touching the UI.
 *
 * Choose a provider with VITE_CONTACT_PROVIDER in .env (see .env.example):
 *   - "mailto"    (default) opens the visitor's email app with a pre-filled message.
 *   - "formspree" POSTs to VITE_FORMSPREE_ENDPOINT (https://formspree.io/f/<id>).
 *   - "api"       POSTs JSON to VITE_CONTACT_API_URL (e.g. your FastAPI route).
 *
 * Never put private API keys in VITE_* variables — they are shipped to the browser.
 */

const PROVIDER = (import.meta.env.VITE_CONTACT_PROVIDER || 'mailto').toLowerCase();
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL;

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

function sendViaMailto({ name, email, message }) {
  const subject = `Portfolio inquiry from ${name}`;
  const body = `${message}\n\n— ${name}\nReply to: ${email}`;
  window.location.href = mailto(subject, body);
}

/**
 * @param {{ name: string, email: string, message: string }} payload
 * @returns {Promise<{ delivered: boolean, message: string }>}
 *   delivered=true means a server accepted the message; false means the visitor's
 *   email app was opened and they still need to press "send" there.
 */
export async function sendContactMessage(payload) {
  if (PROVIDER === 'formspree' && FORMSPREE_ENDPOINT) {
    await postJson(FORMSPREE_ENDPOINT, payload);
    return { delivered: true, message: '✓ PACKET DELIVERED! Your message was sent — expect a reply soon.' };
  }

  if (PROVIDER === 'api' && CONTACT_API_URL) {
    await postJson(CONTACT_API_URL, payload);
    return { delivered: true, message: '✓ PACKET DELIVERED! Your message was sent — expect a reply soon.' };
  }

  sendViaMailto(payload);
  return {
    delivered: false,
    message: `✓ PACKET BUFFERED! Your email app should open with the message pre-filled — press send there. Nothing opened? Email ${EMAIL} directly.`,
  };
}
