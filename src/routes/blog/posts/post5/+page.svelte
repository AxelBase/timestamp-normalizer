<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Copy-Paste Ready ISO Output | AxelBase Blog</title>
  <meta
    name="description"
    content="Discover how one-click copy buttons in AxelBase Timestamp Normalizer deliver perfect ISO strings for databases, APIs, and docs."
  />
  <meta property="og:title" content="Copy-Paste Ready ISO Output | AxelBase Blog" />
  <meta
    property="og:description"
    content="Discover how one-click copy buttons in AxelBase Timestamp Normalizer deliver perfect ISO strings for databases, APIs, and docs."
  />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Copy-Paste Ready ISO Output</p>
  </div>

  <article class="prose glass-card">
    <h1>Copy-Paste Ready ISO Output</h1>

    <p class="post-meta">Published: October 30, 2025</p>

    <p>
      You don’t have time to reformat timestamps. That’s why the <strong>AxelBase Timestamp Normalizer</strong> gives you <strong>perfect ISO 8601 strings</strong> — ready to paste into databases, APIs, or documentation — with one click.
    </p>

    <h2>Two Outputs, One Click</h2>
    <p>
      After parsing, you see:
    </p>

    <ul>
      <li><strong>ISO UTC</strong>: <code>2025-11-16T12:19:00Z</code> → for systems</li>
      <li><strong>ISO with Offset</strong>: <code>2025-11-16T14:19:00+02:00</code> → for humans</li>
    </ul>

    <p>
      Each has a <strong>Copy</strong> button. Click → “Copied!” → paste anywhere.
    </p>

    <h2>Where to Use Them</h2>

    <h3>1. Databases</h3>
    <p>
      <code>INSERT INTO events (timestamp) VALUES ('2025-11-16T12:19:00Z');</code>
    </p>

  <h3>2. APIs</h3>
  <p>
    <code>{`{ "event_time": "2025-11-16T14:19:00+02:00" }`}</code>
  </p>

    <h3>3. Documentation</h3>
    <p>
      “Event occurred at <code>2025-11-16T14:19:00+02:00</code> (SAST).”
    </p>

    <h2>No More Manual Fixes</h2>
    <p>
      No more:
    </p>

    <ul>
      <li>Counting milliseconds</li>
      <li>Guessing offsets</li>
      <li>Fixing <code>MM/DD</code> vs <code>DD/MM</code></li>
    </ul>

    <p>
      The Normalizer does it all — and the <strong>copy button</strong> ensures zero typos.
    </p>

    <h2>Under the Hood</h2>
    <p>
      Uses <code>navigator.clipboard.writeText()</code> with fallback. Works on HTTPS and localhost.
    </p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I copy both at once?</summary>
      <p>Not yet — but planned for v2.</p>
    </details>
    <details>
      <summary>Does it work on mobile?</summary>
      <p>Yes. Long-press the button to copy.</p>
    </details>

    <p class="italic-note">
      One click. Zero errors. ISO perfection.
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