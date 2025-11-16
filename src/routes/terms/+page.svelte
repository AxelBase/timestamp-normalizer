<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | AxelBase Timestamp Normalizer</title>
  <meta
    name="description"
    content="Read the terms of use for AxelBase Timestamp Normalizer: free, open-source, as-is, with no warranties."
  />
  <meta property="og:title" content="Terms and Conditions | AxelBase Timestamp Normalizer" />
  <meta
    property="og:description"
    content="Read the terms of use for AxelBase Timestamp Normalizer: free, open-source, as-is, with no warranties."
  />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose glass-card">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: November 16, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>
      By accessing or using the <strong>AxelBase Timestamp Normalizer</strong> ("the Tool"), you agree to these Terms and Conditions. If you do not agree, do not use the Tool. The Tool is provided by <strong>AxelBase</strong> as a <em>free, open-source utility</em> under the MIT License.
    </p>

    <h2>2. Use of the Tool</h2>
    <p>
      You may use the Tool to:
    </p>
    <ul>
      <li>Convert timestamps to ISO 8601 format</li>
      <li>Parse Unix, natural language, and custom date formats</li>
      <li>Copy ISO strings to clipboard</li>
    </ul>
    <p>
      The Tool is for <strong>personal and commercial use</strong>. You may fork, modify, and deploy it under the MIT License.
    </p>

    <h2>3. Prohibited Uses</h2>
    <p>
      You agree not to:
    </p>
    <ul>
      <li>Use the Tool for unlawful purposes</li>
      <li>Attempt to reverse-engineer or extract proprietary code</li>
      <li>Distribute modified versions without retaining the original license</li>
      <li>Imply endorsement by AxelBase without permission</li>
    </ul>

    <h2>4. No Warranty</h2>
    <p>
      The Tool is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, express or implied, including but not limited to:
    </p>
    <ul>
      <li>Accuracy of timestamp conversion</li>
      <li>Fitness for a particular purpose</li>
      <li>Non-infringement</li>
    </ul>
    <p>
      We do not guarantee the Tool will be error-free or uninterrupted.
    </p>

    <h2>5. Limitation of Liability</h2>
    <p>
      To the fullest extent permitted by law, <strong>AxelBase</strong> shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Tool, even if advised of the possibility of such damages.
    </p>

    <h2>6. Intellectual Property</h2>
    <p>
      The Tool’s source code is licensed under the <strong>MIT License</strong>. You are free to use, modify, and distribute it. The <em>AxelBase</em> name and logo are trademarks. Do not use them in a way that suggests official affiliation without consent.
    </p>

    <h2>7. Third-Party Links</h2>
    <p>
      The Tool may link to external sites (e.g., Luxon docs, GitHub). We are not responsible for their content or practices.
    </p>

    <h2>8. Termination</h2>
    <p>
      We reserve the right to terminate or suspend access to the Tool at any time, without notice, for any reason.
    </p>

    <h2>9. Governing Law</h2>
    <p>
      These terms are governed by the laws of <strong>Norway</strong>. Any disputes shall be resolved in the courts of Oslo.
    </p>

    <h2>10. Changes to Terms</h2>
    <p>
      We may update these terms. Continued use of the Tool constitutes acceptance of the new terms.
    </p>
    <p class="italic-note">
      <strong>Use freely. Build boldly.</strong> The Timestamp Normalizer is yours to trust and extend.
    </p>
  </article>
</div>

<style>
  /* [Same glass-morphism styles — reused for consistency] */
  :root {
    --signal-violet: #924e7d;
    --white: #ffffff;
    --glass-bg: rgba(255, 255, 255, 0.45);
    --glass-border: rgba(255, 255, 255, 0.2);
    --glass-shadow: 0 8px 32px 0 rgba(146, 78, 125, 0.2);
    --text-color: #212529;
    --text-color-light: #495057;
    --border-color: rgba(146, 78, 125, 0.15);
    --secondary-bg: rgba(146, 78, 125, 0.05);
  }
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
  .prose h1, .prose h2 { color: var(--signal-violet); font-weight: 700; }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
  .prose p { color: var(--text-color); margin-bottom: 1.25rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; color: var(--text-color); }
  .prose ul li::marker { color: var(--signal-violet); font-weight: 700; }
  .prose ul li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose .italic-note { font-style: italic; color: var(--text-color-light); text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color); }
  @media (max-width: 768px) { .glass-card { padding: 1.5rem; } .prose h1 { font-size: 2rem; } }
</style>