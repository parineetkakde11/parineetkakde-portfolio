import { Code, Mail, Network } from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, mailto } from '../data/socialLinks';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <Reveal className="contact-card">
        <span className="contact-card__tag">INSERT COIN // START TRANSMISSION</span>
        <div className="contact-card__intro">
          <h2 id="contact-title" className="t-headline-lg">
            HAVE AN INTERESTING PROJECT IN MIND?
          </h2>
          <p>
            I am always interested in discussing backend architecture, voice AI implementations, and building reliable
            software systems. Drop a line directly into my terminal.
          </p>
        </div>

        <div className="channels">
          <ContactCard
            href={mailto('Hello from your portfolio')}
            icon={Mail}
            tone="red"
            kicker="PRIMARY DIRECT"
            value="work.parineetkakde"
            ariaLabel={`Email ${EMAIL}`}
          />
          <ContactCard
            href={GITHUB_URL}
            icon={Code}
            tone="terminal"
            kicker="CODE VAULT"
            value="parineetkakde11"
            external
            ariaLabel="GitHub profile parineetkakde11"
          />
          <ContactCard
            href={LINKEDIN_URL}
            icon={Network}
            tone="cyan"
            kicker="NETWORK"
            value="Parineet Kakde"
            external
            ariaLabel="LinkedIn profile Parineet Kakde"
          />
        </div>

        <ContactForm />
      </Reveal>
    </section>
  );
}
