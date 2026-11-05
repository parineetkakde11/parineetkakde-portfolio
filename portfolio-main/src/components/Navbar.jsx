import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User, X } from 'lucide-react';
import { isNavItemActive, navItems } from '../data/navigation';
import { mailto, resume, socialLinks } from '../data/socialLinks';
import { icons } from './icons';
import ExternalLink from './ExternalLink';
import SmartImage from './SmartImage';
import logoFallback from '../assets/images/logo-fallback.svg';

const LOGO_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDHc1Hq-58QPSBx7sJfopAJmAaNZs5w10YIKtYmZ4LkwM_7VzM6MbhHrZMeIodDr64wurb6iav6MZYWVHRiEk2bSe6G-UQ_JEGKkl_H4YTuE3MtEgDxXntTIp6LilkfkVGNSUMp7rQdeS-tdk7gNx2Gb_9YU3ulhAf8VJXyta8hOmIM--kO4mqxGCnhSB9x4ylkMvjXo56ddAPhrX3ehNJG6UPeFRBbOPlrae2vMICw';

function ResumeLink({ className, children }) {
  return resume.available ? (
    <ExternalLink href={resume.href} className={className}>
      {children}
    </ExternalLink>
  ) : (
    <a href={resume.href} className={className} title="Request my resume by email">
      {children}
    </a>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastKey, setLastKey] = useState(location.key);

  // Close the mobile menu whenever the route (or hash) changes.
  if (lastKey !== location.key) {
    setLastKey(location.key);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1280 && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const renderLinks = (className) =>
    navItems.map((item) => {
      const active = isNavItemActive(item.to, location);
      return (
        <Link
          key={item.to}
          to={item.to}
          className={`${className} ${active ? 'is-active' : ''}`}
          aria-current={active ? 'page' : undefined}
        >
          {item.label}
        </Link>
      );
    });

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="site-header__bar">
        <Link to="/" className="brand" aria-label="Parineet Kakde — home">
          <SmartImage
            src={LOGO_SRC}
            fallbackSrc={logoFallback}
            alt="Parineet Kakde Brand Logo"
            width={40}
            height={40}
            loading="eager"
            className="brand__logo"
          />
          <span className="brand__text">
            <span className="brand__name-row">
              <span className="brand__name">PARINEET KAKDE</span>
              <span className="brand__dot anim-pulse" aria-hidden="true" />
            </span>
            <span className="brand__role">BACKEND &amp; AI DEV</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {renderLinks('site-nav__link')}
        </nav>

        <div className="site-header__actions">
          <div className="social-icons">
            {socialLinks.map(({ id, label, href, icon }) => {
              const Icon = icons[icon];
              return (
                <ExternalLink key={id} href={href} className="icon-btn" aria-label={label}>
                  <Icon size={20} aria-hidden="true" />
                </ExternalLink>
              );
            })}
          </div>
          <div className="cta-split">
            <a className="cta-split__part" href={mailto('Hello from your portfolio')}>
              CONNECT
            </a>
            <span className="cta-split__slash" aria-hidden="true">/</span>
            <ResumeLink className="cta-split__part">{resume.label}</ResumeLink>
          </div>
          <span className="avatar" aria-hidden="true">
            <User size={18} />
          </span>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {renderLinks('mobile-menu__link')}
        </nav>
        <div className="mobile-menu__footer">
          <div className="mobile-menu__social">
            {socialLinks.map(({ id, label, href, icon }) => {
              const Icon = icons[icon];
              return (
                <ExternalLink key={id} href={href} className="icon-btn" aria-label={label}>
                  <Icon size={20} aria-hidden="true" />
                </ExternalLink>
              );
            })}
          </div>
          <div className="mobile-menu__cta">
            <a className="btn btn--red btn--sm" href={mailto('Hello from your portfolio')}>
              CONNECT
            </a>
            <ResumeLink className="btn btn--paper btn--sm">{resume.label}</ResumeLink>
          </div>
        </div>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="mobile-menu__backdrop"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
