// Navbar + footer index. `to` may include a #hash that points at a section id.
export const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/#about' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'SKILLS', to: '/projects#skills' },
  { label: 'ACHIEVEMENTS', to: '/achievements' },
  { label: 'CONTACT', to: '/achievements#contact' },
];

const splitTo = (to) => {
  const [path, hash = ''] = to.split('#');
  return { path, hash: hash ? `#${hash}` : '' };
};

// Hashes that have their own nav entry (e.g. "/#about", "/projects#skills").
const navHashes = new Set(navItems.map((item) => splitTo(item.to).hash).filter(Boolean));

/** True when a nav item matches the current route (and section hash, if any). */
export function isNavItemActive(to, location) {
  const { path, hash } = splitTo(to);
  if (path !== location.pathname) return false;
  const currentHash = navHashes.has(location.hash) ? location.hash : '';
  return hash === currentHash;
}
