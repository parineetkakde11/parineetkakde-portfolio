import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Handles scroll position on navigation:
 *  - path change without hash → jump to top
 *  - URL with #hash → smooth-scroll to that section (also when re-clicking the same link)
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return undefined;
    }

    let frame;
    let attempts = 0;
    const scrollToHash = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      // The section may not be rendered yet right after a route change.
      if (attempts++ < 20) frame = requestAnimationFrame(scrollToHash);
    };
    frame = requestAnimationFrame(scrollToHash);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
