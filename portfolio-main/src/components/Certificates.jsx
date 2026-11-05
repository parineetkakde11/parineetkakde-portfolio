import { Award, FileText } from 'lucide-react';
import { certificates } from '../data/certificates';
import ExternalLink from './ExternalLink';

/**
 * Certificate gallery fed by files in src/assets/certificates/.
 * With no files it renders nothing in production, and a clearly marked
 * placeholder in development so it is easy to spot what to add.
 */
export default function Certificates() {
  if (certificates.length === 0) {
    if (!import.meta.env.DEV) return null;
    return (
      <div id="certificates" className="card card--certs is-placeholder">
        <span className="float-tag float-tag--left float-tag--red">DEV PLACEHOLDER</span>
        <div className="certs__head">
          <Award size={22} className="tone-text--gold" aria-hidden="true" />
          <h2 className="t-headline-sm">CERTIFICATES</h2>
        </div>
        <p className="certs__empty">
          No certificate files found. Add images or PDFs to <code>src/assets/certificates/</code> and they will
          appear here. (This panel is hidden in production until then.)
        </p>
      </div>
    );
  }

  return (
    <div id="certificates" className="card card--certs">
      <span className="float-tag float-tag--left float-tag--red">LOOT // CERTIFICATES</span>
      <div className="certs__head">
        <Award size={22} className="tone-text--gold" aria-hidden="true" />
        <h2 className="t-headline-sm">CERTIFICATES</h2>
      </div>
      <ul className="certs__grid">
        {certificates.map((cert) => (
          <li key={cert.id}>
            <ExternalLink href={cert.url} className="cert" aria-label={`Open certificate: ${cert.title}`}>
              <span className="cert__media">
                {cert.isPdf ? (
                  <FileText size={36} aria-hidden="true" />
                ) : (
                  <img src={cert.url} alt="" loading="lazy" decoding="async" width="320" height="226" />
                )}
              </span>
              <span className="cert__title">{cert.title}</span>
              {(cert.issuer || cert.year) && (
                <span className="cert__meta">{[cert.issuer, cert.year].filter(Boolean).join(' • ')}</span>
              )}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
