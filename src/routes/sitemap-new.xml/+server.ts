// src/routes/sitemap.xml/+server.ts
export const prerender = true;
export const trailingSlash = 'never';

const urls = [
  { loc: 'https://axelbase.github.io/timestamp-normalizer/', lastmod: () => new Date().toISOString().split('T')[0], priority: 1.0 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/blog.html', lastmod: () => new Date().toISOString().split('T')[0], priority: 0.8 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/blog/posts/post1.html', lastmod: '2024-11-01', priority: 0.7 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/blog/posts/post2.html', lastmod: '2024-11-03', priority: 0.7 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/blog/posts/post3.html', lastmod: '2024-11-05', priority: 0.7 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/blog/posts/post4.html', lastmod: '2024-11-07', priority: 0.7 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/blog/posts/post5.html', lastmod: '2024-11-09', priority: 0.7 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/blog/posts/post6.html', lastmod: '2024-11-11', priority: 0.7 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/blog/posts/post7.html', lastmod: '2024-11-13', priority: 0.7 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/privacy.html', lastmod: () => new Date().toISOString().split('T')[0], priority: 0.6 },
  { loc: 'https://axelbase.github.io/timestamp-normalizer/terms.html', lastmod: () => new Date().toISOString().split('T')[0], priority: 0.6 }
];

const generateSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, lastmod, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${typeof lastmod === 'function' ? lastmod() : lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

export const GET = () => {
  return new Response(generateSitemap(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=0'
    }
  });
};