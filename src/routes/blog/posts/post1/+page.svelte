<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>What is the Timestamp Normalizer? | AxelBase Blog</title>
  <meta
    name="description"
    content="Discover AxelBase Timestamp Normalizer — a free, open-source tool that converts any timestamp into ISO 8601 with full timezone control."
  />
  <meta property="og:title" content="What is the Timestamp Normalizer? | AxelBase Blog" />
  <meta
    property="og:description"
    content="Discover AxelBase Timestamp Normalizer — a free, open-source tool that converts any timestamp into ISO 8601 with full timezone control."
  />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>What is the Timestamp Normalizer?</p>
  </div>

  <article class="prose glass-card">
    <h1>What is the Timestamp Normalizer?</h1>

    <p class="post-meta">Published: October 15, 2025</p>

    <p>
      The <strong>AxelBase Timestamp Normalizer</strong> is a lightweight, open-source web tool that instantly converts any timestamp — from Unix milliseconds to natural language — into clean, standardized <strong>ISO 8601</strong> format. Whether you're a developer debugging logs, a data analyst cleaning CSVs, or a writer documenting APIs, this tool eliminates ambiguity and ensures consistency.
    </p>

    <p>
      Built with <strong>SvelteKit</strong> and powered by <strong>Luxon</strong>, it runs entirely in your browser. No data leaves your device. No tracking. No sign-up.
    </p>

    <h2>Why ISO 8601?</h2>
    <p>
      ISO 8601 is the gold standard for machine-readable time. It’s unambiguous, sortable, and universally supported. But most tools only handle one or two input formats. The Normalizer supports:
    </p>

    <ul>
      <li><code>2025-11-16 14:19</code> → <code>2025-11-16T12:19:00Z</code></li>
      <li><code>1731761940000</code> (ms) → <code>2025-11-16T12:19:00Z</code></li>
      <li><code>11/16/2025 2:19 PM</code> → <code>2025-11-16T19:19:00Z</code></li>
      <li><code>Nov 16 2025 14:19</code> → <code>2025-11-16T12:19:00Z</code></li>
    </ul>

    <h2>How It Works</h2>
    <p>
      Paste your timestamp. The tool auto-detects your local timezone (e.g., <code>Africa/Johannesburg</code>) and parses the input using Luxon’s robust engine. It then outputs:
    </p>

    <ul>
      <li><strong>ISO UTC</strong>: <code>2025-11-16T12:19:00Z</code></li>
      <li><strong>ISO with Offset</strong>: <code>2025-11-16T14:19:00+02:00</code></li>
      <li>One-click copy buttons</li>
    </ul>

    <p>
      Toggle <strong>Auto-Detect</strong> off to force a specific timezone — perfect for logs from remote servers.
    </p>

    <h2>Who It’s For</h2>
    <p>
      Backend engineers, DevOps teams, technical writers, and anyone who’s ever stared at a malformed timestamp and thought: <em>“There has to be a better way.”</em>
    </p>

    <h2>FAQ</h2>
    <details>
      <summary>Is it really free?</summary>
      <p>Yes. 100% open-source. Host it yourself or use the live version at <a href="{base}/">axelbase.github.io/timestamp-normalizer</a>.</p>
    </details>
    <details>
      <summary>Does it support DST?</summary>
      <p>Yes. Luxon handles daylight saving transitions automatically — even if your input doesn’t specify the timezone.</p>
    </details>
    <details>
      <summary>Can I use it offline?</summary>
      <p>Yes. Deploy it to GitHub Pages or run it locally with <code>npm run dev</code>.</p>
    </details>

    <p class="italic-note">
      Start normalizing timestamps today. Your logs will thank you.
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