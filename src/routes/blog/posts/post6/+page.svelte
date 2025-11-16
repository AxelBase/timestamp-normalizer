<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Auto-Detect vs Manual Timezone | AxelBase Blog</title>
  <meta
    name="description"
    content="Learn when to trust auto-detect and when to override with manual timezone selection in AxelBase Timestamp Normalizer."
  />
  <meta property="og:title" content="Auto-Detect vs Manual Timezone | AxelBase Blog" />
  <meta
    property="og:description"
    content="Learn when to trust auto-detect and when to override with manual timezone selection in AxelBase Timestamp Normalizer."
  />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Auto-Detect vs Manual Timezone</p>
  </div>

  <article class="prose glass-card">
    <h1>Auto-Detect vs Manual Timezone</h1>

    <p class="post-meta">Published: November 5, 2025</p>

    <p>
      The <strong>Auto-Detect</strong> toggle is the heart of the <strong>AxelBase Timestamp Normalizer</strong>. But when should you trust it — and when should you take control?
    </p>

    <h2>Auto-Detect: On by Default</h2>
    <p>
      Uses <code>Intl.DateTimeFormat().resolvedOptions().timeZone</code> to detect your local zone:
    </p>

    <ul>
      <li>You’re in Cape Town → <code>Africa/Johannesburg</code></li>
      <li>You’re in New York → <code>America/New_York</code></li>
    </ul>

    <p>
      Perfect for personal use, local logs, or when you <em>are</em> the source.
    </p>

    <h2>Manual Override: When to Use</h2>
    <p>
      Toggle <strong>OFF</strong> and select from 500+ IANA zones when:
    </p>

    <ul>
      <li>Parsing <strong>server logs</strong> from UTC or US servers</li>
      <li>Working with <strong>remote team data</strong></li>
      <li>Standardizing <strong>global datasets</strong></li>
    </ul>

    <h2>Example</h2>
    <p>
      Log says: <code>2025-11-16 07:19</code><br>
      Server in <code>US/Pacific</code> → You’re in <code>SAST</code>
    </p>

    <p>
      <strong>Auto-Detect</strong>: Wrong → assumes SAST<br>
      <strong>Manual</strong>: Correct → select <code>America/Los_Angeles</code>
    </p>

    <h2>Pro Tip</h2>
    <p>
      Always verify the <strong>Source Timezone</strong> in the output card. It shows what zone was used.
    </p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I save my preferred zone?</summary>
      <p>Not yet — but planned for v2 with localStorage.</p>
    </details>
    <details>
      <summary>Is auto-detect accurate?</summary>
      <p>Yes. Uses browser’s IANA database — same as Luxon.</p>
    </details>

    <p class="italic-note">
      Auto when you can. Manual when you must.
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