import { useState } from 'react';
import projectFallback from '../assets/images/project-fallback.svg';

/**
 * <img> with lazy loading, explicit dimensions (prevents layout shift) and a
 * graceful local fallback when the remote image fails to load.
 */
export default function SmartImage({
  src,
  alt,
  fallbackSrc = projectFallback,
  width = 640,
  height = 360,
  loading = 'lazy',
  className,
  ...rest
}) {
  const [failedSrc, setFailedSrc] = useState(null);
  const currentSrc = failedSrc === src ? fallbackSrc : src;

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => {
        if (currentSrc !== fallbackSrc) setFailedSrc(src);
      }}
      {...rest}
    />
  );
}
