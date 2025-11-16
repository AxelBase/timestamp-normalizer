<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Your First ISO 8601 Conversion | AxelBase Blog</title>
  <meta
    name="description"
    content="Step-by-step guide to using AxelBase Timestamp Normalizer: paste, parse, convert, copy — in under 10 seconds."
  />
  <meta property="og:title" content="Your First ISO 8601 Conversion | AxelBase Blog" />
  <meta
    property="og:description"
    content="Step-by-step guide to using AxelBase Timestamp Normalizer: paste, parse, convert, copy — in under 10 seconds."
  />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Your First ISO 8601 Conversion</p>
  </div>

  <article class="prose glass-card">
    <h1>Your First ISO 8601 Conversion</h1>

    <p class="post-meta">Published: October 22, 2025</p>

    <p>
      Let’s convert your first timestamp — in under 10 seconds. No setup. No login. Just paste and go.
    </p>

    <h2>Step 1: Open the Tool</h2>
    <p>
      Go to <a href="{base}/">axelbase.github.io/timestamp-normalizer</a>. The interface loads instantly.
    </p>

    <h2>Step 2: Paste Your Timestamp</h2>
    <p>
      Try any of these:
    </p>

    <ul>
      <li><code>2025-11-16 14:19</code></li>
      <li><code>1731761940000</code></li>
      <li><code>11/16/2025 2:19 PM</code></li>
    </ul>

    <p>
      The tool auto-detects your timezone (e.g., <strong>SAST</strong>) and parses instantly.
    </p>

    <h2>Step 3: Review Output</h2>
    <p>
      You’ll see:
    </p>

    <ul>
      <li><strong>Parsed Local Time</strong>: <code>16 November 2025, 14:19:00 SAST</code></li>
      <li><strong>ISO UTC</strong>: <code>2025-11-16T12:19:00Z</code></li>
      <li><strong>ISO with Offset</strong>: <code>2025-11-16T14:19:00+02:00</code></li>
    </ul>

    <h2>Step 4: Copy & Use</h2>
    <p>
      Click the <strong>Copy</strong> button next to either ISO string. Paste into:
    </p>

    <ul>
      <li>API payloads</li>
      <li>Database inserts</li>
      <li>Documentation</li>
      <li>Log analysis</li>
    </ul>

    <h2>Pro Tip: Manual Timezone</h2>
    <p>
      Toggle <strong>Auto-Detect</strong> off to force <code>America/New_York</code> or any IANA zone. Perfect for server logs.
    </p>

    <h2>FAQ</h2>
    <details>
      <summary>What if the input is invalid?</summary>
      <p>A clear error appears. Fix the format and try again.</p>
    </details>
    <details>
      <summary>Can I convert multiple at once?</summary>
      <p>Not yet — but batch mode is planned for v2.</p>
    </details>

    <p class="italic-note">
      One paste. One click. One perfect ISO string. Welcome to the future of timestamp conversion.
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