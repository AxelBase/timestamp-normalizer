<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding Timezone Offsets | AxelBase Blog</title>
  <meta
    name="description"
    content="Learn how +02:00, -05:00, and Z work in ISO 8601 — and why preserving the original offset is critical for logs and APIs."
  />
  <meta property="og:title" content="Understanding Timezone Offsets | AxelBase Blog" />
  <meta
    property="og:description"
    content="Learn how +02:00, -05:00, and Z work in ISO 8601 — and why preserving the original offset is critical for logs and APIs."
  />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding Timezone Offsets</p>
  </div>

  <article class="prose glass-card">
    <h1>Understanding Timezone Offsets</h1>

    <p class="post-meta">Published: October 25, 2025</p>

    <p>
      You’ve seen them: <code>+02:00</code>, <code>-05:00</code>, <code>Z</code>. But what do they mean — and why does the <strong>AxelBase Timestamp Normalizer</strong> show <em>both</em> ISO UTC and ISO with offset? Let’s break it down.
    </p>

    <h2>The Two ISO Outputs</h2>
    <p>
      When you convert <code>2025-11-16 14:19</code> in <code>Africa/Johannesburg</code>, you get:
    </p>

    <ul>
      <li><strong>ISO UTC</strong>: <code>2025-11-16T12:19:00Z</code></li>
      <li><strong>ISO with Offset</strong>: <code>2025-11-16T14:19:00+02:00</code></li>
    </ul>

    <h3>What is Z?</h3>
    <p>
      <code>Z</code> stands for <strong>Zulu time</strong> — another name for <strong>UTC</strong>. It means “zero offset from UTC.” It’s the universal standard for systems that need consistency across regions.
    </p>

    <h3>What is +02:00?</h3>
    <p>
      This is the <strong>local offset</strong>. Johannesburg is 2 hours ahead of UTC. So:
    </p>

    <pre><code>Local Time = UTC Time + Offset</code></pre>

    <h2>Why Preserve the Offset?</h2>
    <p>
      Because <strong>context matters</strong>. A log entry at <code>14:19+02:00</code> tells you:
    </p>

    <ul>
      <li>The event happened at 2:19 PM local time</li>
      <li>It was 12:19 PM in London</li>
      <li>The server was in SAST</li>
    </ul>

    <p>
      Converting everything to <code>Z</code> loses this. That’s why the Normalizer gives you <em>both</em>.
    </p>

<h2>Common Offset Patterns</h2>
<table class="table table-bordered">
  <tbody>
    <tr>
      <th>Zone</th>
      <th>Offset</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>UTC</td>
      <td><code>Z</code></td>
      <td><code>12:19:00Z</code></td>
    </tr>
    <tr>
      <td>SAST</td>
      <td><code>+02:00</code></td>
      <td><code>14:19:00+02:00</code></td>
    </tr>
    <tr>
      <td>EST</td>
      <td><code>-05:00</code></td>
      <td><code>07:19:00-05:00</code></td>
    </tr>
    <tr>
      <td>IST</td>
      <td><code>+05:30</code></td>
      <td><code>17:49:00+05:30</code></td>
    </tr>
  </tbody>
</table>

    <h2>When to Use Which</h2>
    <ul>
      <li><strong>Use <code>Z</code></strong>: Databases, APIs, event scheduling</li>
      <li><strong>Use offset</strong>: Logs, user-facing timestamps, audit trails</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Why not just use local time?</summary>
      <p>Local time varies by user. UTC + offset is unambiguous and sortable.</p>
    </details>
    <details>
      <summary>Does the offset change with DST?</summary>
      <p>Yes. Luxon adjusts automatically. SAST doesn’t observe DST, but EST/EDT does.</p>
    </details>

    <p class="italic-note">
      Know your <code>Z</code> from your <code>+02:00</code>. Your data depends on it.
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