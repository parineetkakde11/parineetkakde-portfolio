import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Routes that should appear in sitemap.xml. Keep in sync with src/App.jsx.
const SITE_ROUTES = ['/', '/projects', '/achievements'];

/**
 * Resolves the public site URL used for canonical links, Open Graph tags,
 * robots.txt and sitemap.xml.
 *  1. VITE_SITE_URL (set it in .env or in the Vercel dashboard), or
 *  2. VERCEL_PROJECT_PRODUCTION_URL (provided automatically by Vercel builds).
 * When neither exists, absolute URLs are omitted rather than faked.
 */
function resolveSiteUrl(env) {
  const raw =
    env.VITE_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : '');
  return raw.replace(/\/+$/, '');
}

function seoPlugin(siteUrl) {
  return {
    name: 'portfolio-seo',
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', siteUrl);
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /'];
      if (siteUrl) {
        robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`);
        const today = new Date().toISOString().slice(0, 10);
        const urls = SITE_ROUTES.map(
          (route) =>
            `  <url>\n    <loc>${siteUrl}${route === '/' ? '/' : route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
        ).join('\n');
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        });
      } else {
        this.warn(
          'No site URL found (VITE_SITE_URL / VERCEL_PROJECT_PRODUCTION_URL). sitemap.xml was skipped.',
        );
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots.join('\n')}\n` });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), seoPlugin(resolveSiteUrl(env))],
  };
});
