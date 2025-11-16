<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase Timestamp Normalizer</title>
  <meta
    name="description"
    content="Learn how AxelBase Timestamp Normalizer protects your privacy: 100% client-side, no data collection, no tracking, no servers."
  />
  <meta property="og:title" content="Privacy Policy | AxelBase Timestamp Normalizer" />
  <meta
    property="og:description"
    content="Learn how AxelBase Timestamp Normalizer protects your privacy: 100% client-side, no data collection, no tracking, no servers."
  />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose glass-card">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: November 16, 2025</p>

    <h2>1. Introduction</h2>
    <p>
      Welcome to the <strong>AxelBase Timestamp Normalizer</strong>, a free, open-source, <em>privacy-first</em> web tool developed by <strong>AxelBase</strong> ("we," "us," or "our"). This Privacy Policy explains how we handle your information when you use our tool to convert timestamps into ISO 8601 format. We are committed to your privacy and operate on a <strong>zero-data-collection model</strong>. The tool runs <em>entirely in your browser</em> — no data is sent to servers, no logs are kept, and no personal information is ever collected.
    </p>

    <h2>2. Information We Do Not Collect</h2>
    <p>
      The Timestamp Normalizer is designed to function without gathering any data. We do not collect:
    </p>
    <ul>
      <li><strong>Personal Information</strong>: Names, emails, IP addresses, or device identifiers.</li>
      <li><strong>Usage Data</strong>: Browser type, operating system, location, or session duration.</li>
      <li><strong>Input Data</strong>: Any timestamp you paste (e.g., <code>11/16/2025 2:19 PM</code>) is processed <em>locally</em> and never transmitted.</li>
      <li><strong>Analytics or Tracking</strong>: No Google Analytics, cookies, pixels, or third-party trackers.</li>
    </ul>
    <p>
      All parsing, conversion, and copy-to-clipboard actions happen <strong>client-side only</strong>. Your data never leaves your device.
    </p>

    <h2>3. How the Tool Works</h2>
    <p>
      When you use the Timestamp Normalizer:
    </p>
    <ul>
      <li><strong>Input Processing</strong>: You enter a timestamp. Luxon parses it using your selected or auto-detected timezone — all in-browser.</li>
      <li><strong>No Transmission</strong>: No data is sent to any server. ISO outputs are generated instantly on your device.</li>
      <li><strong>Temporary Storage</strong>: Only browser memory is used during your session. Data is cleared on page refresh or close.</li>
    </ul>
    <p>
      This <em>client-side architecture</em> ensures <strong>complete data isolation</strong> — ideal for sensitive logs or internal tools.
    </p>

    <h2>4. Third-Party Services</h2>
    <p>
      We do not integrate any external services that collect data. Open-source libraries (e.g., Luxon) are bundled locally. Copy-to-clipboard uses the native <code>navigator.clipboard</code> API — no third-party involvement.
    </p>

    <h2>5. Cookies and Tracking</h2>
    <p>
      The tool is <strong>completely stateless</strong>. We do not use cookies, localStorage, or any tracking technologies.
    </p>

    <h2>6. Data Security</h2>
    <p>
      Since no data is collected, there is no risk of breach. We recommend:
    </p>
    <ul>
      <li>Using the tool over HTTPS (GitHub Pages default)</li>
      <li>Avoiding input of highly sensitive data in public environments</li>
    </ul>

    <h2>7. Children's Privacy</h2>
    <p>
      The tool is not directed at children under 13. We do not knowingly collect data from minors.
    </p>

    <h2>8. International Compliance</h2>
    <p>
      By collecting no data, we comply with <strong>GDPR</strong>, <strong>CCPA</strong>, <strong>POPIA</strong>, and global privacy laws by default.
    </p>

    <h2>9. Changes to This Policy</h2>
    <p>
      We may update this policy. Changes will be posted here with a new effective date.
    </p>
    <p class="italic-note">
      <strong>Your privacy is non-negotiable.</strong> Use the Timestamp Normalizer with confidence — your data stays yours.
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