import { certificateDetails } from './achievements';

// Every image/PDF dropped into src/assets/certificates/ is picked up at build time.
const files = import.meta.glob('../assets/certificates/*.{png,jpg,jpeg,webp,avif,pdf}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const titleFromFileName = (fileName) =>
  fileName
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .toUpperCase();

export const certificates = Object.keys(files)
  .sort()
  .map((path) => {
    const fileName = path.split('/').pop();
    const details = certificateDetails[fileName] ?? {};
    return {
      id: fileName,
      url: files[path],
      isPdf: fileName.toLowerCase().endsWith('.pdf'),
      title: details.title ?? titleFromFileName(fileName),
      issuer: details.issuer ?? '',
      year: details.year ?? '',
    };
  });
