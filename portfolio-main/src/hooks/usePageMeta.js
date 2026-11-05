import { useEffect } from 'react';

const SITE_NAME = 'Parineet Kakde';

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Updates the document title, description, canonical and social tags per route. */
export function usePageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Backend & AI Application Developer`;
    const url = `${window.location.origin}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [title, description, path]);
}
