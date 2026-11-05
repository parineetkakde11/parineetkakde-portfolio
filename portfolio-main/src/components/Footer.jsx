import { Link } from 'react-router-dom';
import { Mail, Network, Send, Terminal } from 'lucide-react';
import { navItems } from '../data/navigation';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, mailto } from '../data/socialLinks';
import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__strip" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__about">
            <div className="site-footer__name-row">
              <span className="site-footer__name">PARINEET KAKDE</span>
              <span className="site-footer__online">1P ONLINE</span>
            </div>
            <p className="site-footer__bio">
              Backend &amp; AI Application Developer • B.Tech CSE (2024-2028), DY Patil SST Pune.
              Engineering resilient high-concurrency microservices and real-time LLM systems.
            </p>
            <div className="site-footer__email">
              <Mail size={18} aria-hidden="true" />
              <a href={mailto()}>{EMAIL}</a>
            </div>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__heading site-footer__heading--gold">SYSTEM INDEX</span>
            <nav className="site-footer__index" aria-label="Footer">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to}>
                  &gt; {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__heading site-footer__heading--cyan">TERMINAL LINKS</span>
            <div className="site-footer__links">
              <ExternalLink href={GITHUB_URL} className="terminal-link terminal-link--red">
                <Terminal size={16} aria-hidden="true" />
                <span>GITHUB // PARINEET11</span>
              </ExternalLink>
              <ExternalLink href={LINKEDIN_URL} className="terminal-link terminal-link--indigo">
                <Network size={16} aria-hidden="true" />
                <span>LINKEDIN // PROFILE</span>
              </ExternalLink>
              <a href={mailto('Hello from your portfolio')} className="terminal-link terminal-link--green">
                <Send size={16} aria-hidden="true" />
                <span>SEND TRANSMISSION</span>
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Parineet Kakde | Built with Craft &amp; Code</p>
          <div className="site-footer__tagline">
            <span>COIN-OP ARCHITECTURE</span>
            <span className="site-footer__square" aria-hidden="true" />
            <span>PUNE // MH // IN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
