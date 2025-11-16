<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Handling Daylight Saving Time (DST) | AxelBase Blog</title>
  <meta
    name="description"
    content="See how AxelBase Timestamp Normalizer handles DST transitions — even when your input omits the timezone."
  />
  <meta property="og:title" content="Handling Daylight Saving Time (DST) | AxelBase Blog" />
  <meta
    property="og:description"
    content="See how AxelBase Timestamp Normalizer handles DST transitions — even when your input omits the timezone."
  />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Handling Daylight Saving Time (DST)</p>
  </div>

  <article class="prose glass-card">
    <h1>Handling Daylight Saving Time (DST)</h1>

    <p class="post-meta">Published: November 10, 2025</p>

    <p>
      DST breaks time. On <strong>March 9, 2025</strong>, New York jumps from <code>01:59 AM</code> to <code>03:00 AM</code>. <code>02:30 AM</code> never exists. But your log says it does. The <strong>AxelBase Timestamp Normalizer</strong> fixes this — automatically.
    </p>

    <h2>The DST Problem</h2>
    <p>
      Input: <code>2025-03-09 02:30 America/New_York</code><br>
      Native <code>Date</code>: Invalid or wrong<br>
      Luxon: <strong>Adjusts to 03:30</strong> or flags error
    </p>

    <h2>How the Normalizer Handles It</h2>
    <p>
      Luxon knows the IANA database. It:
    </p>

    <ul>
      <li>Detects <strong>spring forward</strong> (missing hour)</li>
      <li>Detects <strong>fall back</strong> (duplicate hour)</li>
      <li>Uses <strong>earlier offset</strong> in ambiguous cases</li>
    </ul>

    <h2>Real Example</h2>
    <p>
      Input: <code>2025-03-09 02:30</code> + <code>America/New_York</code><br>
      Output:
    </p>

    <ul>
      <li><strong>Parsed</strong>: Invalid → error shown</li>
      <li><strong>Adjusted</strong>: <code>2025-03-09T03:30:00-04:00</code> (EDT)</li>
    </ul>
    
    <h2>Best Practice</h2>
    <p>
      Always include the timezone in logs. The Normalizer will save you from DST bugs.
    </p>

    <h2>FAQ</h2>
    <details>
      <summary>Does it handle historical DST?</summary>
      <p>Yes. Luxon’s database goes back decades.</p>
    </details>
    <details>
      <summary>What about leap seconds?</summary>
      <p>Not supported — but irrelevant for most use cases.</p>
    </details>

    <p class="italic-note">
      DST won’t break your data. Luxon won’t let it.
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