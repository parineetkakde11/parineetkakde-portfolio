// Single source of truth for contact details and external profile links.

export const EMAIL = 'work.parineetkakde@gmail.com';
export const GITHUB_URL = 'https://github.com/parineetkakde11';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/parineet-kakde-42a01a31a/';

export const mailto = (subject = '', body = '') => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${EMAIL}${query ? `?${query}` : ''}`;
};

// Resume: any PDF placed in src/assets/resume/ is picked up automatically.
const resumeFiles = import.meta.glob('../assets/resume/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
});
const resumeUrl = Object.keys(resumeFiles).sort().map((key) => resumeFiles[key])[0] ?? null;

export const resume = resumeUrl
  ? { available: true, href: resumeUrl, label: 'RESUME' }
  : {
      available: false,
      href: mailto('Resume request', 'Hi Parineet,\n\nCould you please share your latest resume?\n\nThanks,'),
      label: 'RESUME',
    };

export const socialLinks = [
  { id: 'github', label: 'GitHub Profile', href: GITHUB_URL, icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn Profile', href: LINKEDIN_URL, icon: 'linkedin' },
];
