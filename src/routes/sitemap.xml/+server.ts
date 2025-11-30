// src/routes/sitemap.xml/+server.ts
export const prerender = true;
export const trailingSlash = 'never';

const urls = [
  'https://axelbase.github.io/timestamp-normalizer/',
  'https://axelbase.github.io/timestamp-normalizer/blog.html',
  'https://axelbase.github.io/timestamp-normalizer/blog/posts/post1.html',
  'https://axelbase.github.io/timestamp-normalizer/blog/posts/post2.html',
  'https://axelbase.github.io/timestamp-normalizer/blog/posts/post3.html',
  'https://axelbase.github.io/timestamp-normalizer/blog/posts/post4.html',
  'https://axelbase.github.io/timestamp-normalizer/blog/posts/post5.html',
  'https://axelbase.github.io/timestamp-normalizer/blog/posts/post6.html',
  'https://axelbase.github.io/timestamp-normalizer/blog/posts/post7.html',
  'https://axelbase.github.io/timestamp-normalizer/privacy.html',
  'https://axelbase.github.io/timestamp-normalizer/terms.html'
];

const generateSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${url.endsWith('/') ? '1.0' : url.includes('blog.html') ? '0.8' : '0.7'}</priority>
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