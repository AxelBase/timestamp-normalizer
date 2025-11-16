<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How Timestamp Parsing Works | AxelBase Blog</title>
  <meta
    name="description"
    content="Explore how Luxon powers the AxelBase Timestamp Normalizer to parse Unix, ISO, and natural language dates with zero ambiguity."
  />
  <meta property="og:title" content="How Timestamp Parsing Works | AxelBase Blog" />
  <meta
    property="og:description"
    content="Explore how Luxon powers the AxelBase Timestamp Normalizer to parse Unix, ISO, and natural language dates with zero ambiguity."
  />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How Timestamp Parsing Works</p>
  </div>

  <article class="prose glass-card">
    <h1>How Timestamp Parsing Works</h1>

    <p class="post-meta">Published: October 18, 2025</p>

    <p>
      Behind every clean ISO output is a powerful parsing engine. The <strong>AxelBase Timestamp Normalizer</strong> uses <strong>Luxon</strong> — a modern, immutable, and timezone-aware successor to Moment.js — to handle the chaos of real-world timestamp formats.
    </p>

    <h2>The Parsing Pipeline</h2>
    <p>
      When you paste a timestamp, the tool runs it through a multi-stage parser:
    </p>

    <ol>
      <li><strong>Numeric Check</strong>: Is it a Unix timestamp? (seconds or milliseconds)</li>
      <li><strong>ISO Detection</strong>: Does it match <code>YYYY-MM-DDTHH:mm:ss</code>?</li>
      <li><strong>RFC 2822 / HTTP</strong>: Email-style dates like <code>16 Nov 2025 14:19:00 GMT</code></li>
      <li><strong>SQL Format</strong>: <code>2025-11-16 14:19:00</code></li>
      <li><strong>Custom Patterns</strong>: <code>MM/DD/YYYY</code>, <code>DD-MM-YYYY</code>, <code>MMM DD YYYY</code></li>
      <li><strong>Fallback</strong>: Native <code>Date</code> parsing (last resort)</li>
    </ol>

    <h2>Why Luxon?</h2>
    <p>
      Unlike the native <code>Date</code> object, Luxon:
    </p>

    <ul>
      <li>Handles <strong>invalid dates</strong> gracefully (e.g., Feb 30)</li>
      <li>Supports <strong>IANA timezones</strong> like <code>Africa/Johannesburg</code></li>
      <li>Correctly manages <strong>DST transitions</strong></li>
      <li>Is <strong>immutable</strong> — no side effects</li>
    </ul>

    <h2>Example: Ambiguous Input</h2>
    <p>
      Input: <code>03/04/2025 02:30</code><br>
      In <code>en-US</code>: March 4 → valid<br>
      In <code>en-GB</code>: April 3 → valid<br>
      The Normalizer uses your selected timezone to resolve ambiguity.
    </p>

    <h2>Under the Hood</h2>
    <p>
      Luxon’s <code>DateTime.fromFormat()</code> and <code>fromISO()</code> are chained with fallbacks. If all fail, an error is shown — never a wrong date.
    </p>

    <h2>FAQ</h2>
    <details>
      <summary>Can it parse relative times like “yesterday”?</summary>
      <p>Not yet — but planned for v2. It currently supports absolute timestamps only.</p>
    </details>
    <details>
      <summary>Why not use Moment.js?</summary>
      <p>Moment is deprecated. Luxon is lighter, faster, and actively maintained.</p>
    </details>

    <p class="italic-note">
      Reliable parsing = reliable data. That’s the AxelBase promise.
    </p>
  </article>
</div>

<style>
  /* [Same styles as provided — reused for consistency] */
  :root { --signal-violet: #924e7d; --white: #ffffff; --glass-bg: rgba(255,255,255,0.45); --glass-border: rgba(255,255,255,0.2); --glass-shadow: 0 8px 32px 0 rgba(146,78,125,0.2); --text-color: #212529; --text-color-light: #495057; --border-color: rgba(146,78,125,0.15); --secondary-bg: rgba(146,78,125,0.05); }
  .fade-in { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; transform: translateY(20px); }
  @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
  .glass-card { background: var(--glass-bg); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border-radius: 0.75rem; border: 1px solid var(--glass-border); box-shadow: var(--glass-shadow); padding: 2rem 3rem; }
  .post-layout { max-width: 800px; padding-top: 2rem; padding-bottom: 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-color-light); }
  .breadcrumbs a { color: var(--signal-violet); text-decoration: none; font-weight: 600; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; font-weight: 600; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: var(--text-color-light); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2{ color: var(--signal-violet); font-weight: 700; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
  .prose p { color: var(--text-color); margin-bottom: 1.25rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; color: var(--text-color); }
  .prose ul li::marker { color: var(--signal-violet); font-weight: 700; }
  .prose ul li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem 1.5rem; margin-bottom: 1rem; transition: background-color 0.2s ease; }
  .prose details[open] { background-color: var(--white); }
  .prose summary { cursor: pointer; font-weight: 600; color: var(--signal-violet); list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: var(--signal-violet); font-weight: 700; display: inline-block; transition: transform 0.2s ease; font-size: 1.2rem; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 3px solid var(--signal-violet); color: var(--text-color-light); margin-bottom: 0; }
  .prose .italic-note { font-style: italic; color: var(--text-color-light); text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color); }
  @media (max-width: 768px) { .glass-card { padding: 1.5rem; } .prose h1 { font-size: 2rem; } }
</style>