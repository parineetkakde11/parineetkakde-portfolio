import { useEffect, useRef, useState } from 'react';

/**
 * Subtle fade-up entrance when the element scrolls into view.
 * Disabled automatically for prefers-reduced-motion (see global.css).
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    if (visible) return undefined;
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
