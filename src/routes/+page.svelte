<script>
  import { base } from '$app/paths';
  import TimestampInput from '$lib/components/TimestampInput.svelte';
  import TimezoneSelect from '$lib/components/TimezoneSelect.svelte';
  import ISOOutput from '$lib/components/ISOOutput.svelte';
  import ErrorMessage from '$lib/components/ErrorMessage.svelte';
</script>

<main class="container my-5">
  <div class="row justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-7">
      <div class="fade-in-up">
        <div class="glass-card p-4 p-md-5">
          <h1 class="text-center mb-3 display-5" style="color: var(--signal-violet); font-weight: 700;">
            Timestamp Normalizer
          </h1>
          <p class="text-center text-muted mb-5">
            Convert timestamps from any format and timezone to ISO 8601.
          </p>

          <TimestampInput />
          <TimezoneSelect />
          <ErrorMessage />
          <ISOOutput />
        </div>
      </div>
    </div>
  </div>
</main>

<!-- ABOUT SECTION -->
<section id="about" class="page-section py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="text-center mb-5" style="color: var(--signal-violet); font-weight: 700;">About AxelBase</h2>
        <div class="prose mx-auto">
          <p>
            <strong>AxelBase</strong> is a software initiative dedicated to building <em>privacy-first, open-source tools</em> that solve real-world developer and data challenges. AxelBase operates on three core principles: <strong>transparency</strong>, <strong>simplicity</strong>, and <strong>zero data collection</strong>.
          </p>

          <p>
            Our flagship tool, the <strong>Timestamp Normalizer</strong>, was born from a simple frustration: inconsistent timestamp formats across logs, APIs, and databases. Whether you're dealing with <code>11/16/2025 2:19 PM</code>, <code>1731761940000</code>, or <code>Nov 16 2025 14:19</code>, the Normalizer instantly converts it to <strong>ISO 8601</strong> — the universal standard for machine-readable time.
          </p>

          <p>
            Powered by <strong>Luxon</strong> — a modern, immutable, and timezone-aware date library — the tool runs <em>entirely in your browser</em>. No servers. No tracking. No data leaves your device. This client-side architecture ensures <strong>complete data isolation</strong>, making it safe for sensitive logs, internal tools, or compliance-heavy environments.
          </p>

          <p>
            AxelBase believes in <strong>open collaboration</strong>. The Timestamp Normalizer is licensed under the <strong>MIT License</strong>, meaning you can fork, modify, and deploy it anywhere — GitHub Pages, internal dashboards, or even offline. We encourage contributions via our <a href="https://github.com/axelbase/timestamp-normalizer" target="_blank" rel="noopener">GitHub repository</a>.
          </p>

          <p>
            Beyond this tool, AxelBase is expanding into a suite of developer utilities focused on <em>data integrity</em> and <em>workflow efficiency</em>. Every tool follows the same philosophy: <strong>do one thing, do it perfectly, and respect user privacy</strong>.
          </p>
          <p class="text-center mt-5">
            <em>AxelBase — Because your data deserves clarity.</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- HOW TO USE SECTION -->
<section id="how-to-use" class="page-section py-5" style="background-color: rgba(255,255,255,0.2);">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="text-center mb-5" style="color: var(--signal-violet); font-weight: 700;">How to Use</h2>
        <div class="prose mx-auto">
          <p>
            The <strong>Timestamp Normalizer</strong> is designed for speed and precision. Convert any timestamp to ISO 8601 in <em>under 10 seconds</em> — no setup, no login, no friction. Here’s how:
          </p>

          <h3>Step 1: Paste Your Timestamp</h3>
          <p>
            Start by entering any timestamp into the input field. The tool supports:
          </p>
          <ul>
            <li><strong>Natural language</strong>: <code>Nov 16 2025 14:19</code></li>
            <li><strong>US/EU formats</strong>: <code>11/16/2025 2:19 PM</code> or <code>16-11-2025 14:19</code></li>
            <li><strong>Unix timestamps</strong>: <code>1731761940</code> (seconds) or <code>1731761940000</code> (milliseconds)</li>
            <li><strong>ISO strings</strong>: <code>2025-11-16T14:19:00</code></li>
            <li><strong>SQL format</strong>: <code>2025-11-16 14:19:00</code></li>
          </ul>
          <p>
            As you type, the tool <strong>auto-parses</strong> using Luxon’s robust engine. Invalid inputs trigger a clear error message.
          </p>

          <h3>Step 2: Choose Your Timezone</h3>
          <p>
            By default, <strong>Auto-Detect</strong> is enabled and uses your browser’s timezone (e.g., <code>Africa/Johannesburg</code>). Toggle it off to manually select from <strong>500+ IANA zones</strong> — ideal for server logs or remote data.
          </p>

          <h3>Step 3: Review the Output</h3>
          <p>
            Once parsed, you’ll see:
          </p>
          <ul>
            <li><strong>Parsed Local Time</strong>: Human-readable with timezone name</li>
            <li><strong>ISO UTC</strong>: <code>2025-11-16T12:19:00Z</code> — perfect for databases and APIs</li>
            <li><strong>ISO with Offset</strong>: <code>2025-11-16T14:19:00+02:00</code> — preserves original context</li>
            <li><strong>Source Timezone</strong>: Confirms what zone was used</li>
          </ul>

          <h3>Step 4: Copy & Go</h3>
          <p>
            Click the <strong>Copy</strong> button next to either ISO string. It’s now in your clipboard — ready for:
          </p>
          <ul>
            <li>Database inserts</li>
            <li>API payloads</li>
            <li>Documentation</li>
            <li>Log analysis</li>
          </ul>

          <h3>Pro Tips</h3>
          <ul>
            <li>Use <strong>ISO UTC</strong> for sorting and storage</li>
            <li>Use <strong>ISO with Offset</strong> for audit trails</li>
            <li>Deploy your own version on GitHub Pages for team use</li>
          </ul>

          <p class="text-center mt-5">
            <em>One paste. One click. ISO perfection.</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ SECTION -->
<section id="faq" class="page-section py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="text-center mb-5" style="color: var(--signal-violet); font-weight: 700;">Frequently Asked Questions</h2>
        <div class="prose mx-auto">
          <details class="mb-4">
            <summary><strong>Is the Timestamp Normalizer really free?</strong></summary>
            <p class="mt-3">
              Yes. 100% free and open-source under the MIT License. Use it online at <code>axelbase.github.io/timestamp-normalizer</code> or deploy it yourself.
            </p>
          </details>

          <details class="mb-4">
            <summary><strong>Does it collect my data?</strong></summary>
            <p class="mt-3">
              <strong>No.</strong> The tool runs <em>entirely in your browser</em>. No data is sent to servers, no cookies, no analytics. Your timestamps stay on your device.
            </p>
          </details>

          <details class="mb-4">
            <summary><strong>Can it handle Daylight Saving Time (DST)?</strong></summary>
            <p class="mt-3">
              Yes. Luxon automatically adjusts for DST transitions. For example, <code>2025-03-09 02:30</code> in <code>America/New_York</code> is flagged as invalid and adjusted to <code>03:30</code> (EDT).
            </p>
          </details>

          <details class="mb-4">
            <summary><strong>What formats does it support?</strong></summary>
            <p class="mt-3">
              Over a dozen, including Unix (seconds/ms), ISO, SQL, US/EU date formats, and natural language like <code>Nov 16 2025 14:19</code>.
            </p>
          </details>

          <details class="mb-4">
            <summary><strong>Can I use it offline?</strong></summary>
            <p class="mt-3">
              Yes. Download the repo and open <code>index.html</code> locally, or deploy to any static host.
            </p>
          </details>

          <details class="mb-4">
            <summary><strong>Why two ISO outputs?</strong></summary>
            <p class="mt-3">
              <strong>ISO UTC</strong> (<code>Z</code>) for systems. <strong>ISO with Offset</strong> (<code>+02:00</code>) for context. Use both wisely.
            </p>
          </details>

          <details class="mb-4">
            <summary><strong>Can I contribute or customize it?</strong></summary>
            <p class="mt-3">
              Absolutely. Fork us on <a href="https://github.com/axelbase/timestamp-normalizer" target="_blank" rel="noopener">GitHub</a>. Add batch mode, dark mode, or export features.
            </p>
          </details>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .page-section {
    padding: 4rem 0;
  }
  .prose {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    color: var(--text-color);
  }
  .prose p {
    margin-bottom: 1.25rem;
  }
  .prose ul {
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
  }
  .prose ul li {
    margin-bottom: 0.5rem;
  }
  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
  }
  .prose details[open] {
    background: white;
  }
  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--signal-violet);
    list-style: none;
  }
  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    font-weight: 700;
    color: var(--signal-violet);
  }
  .prose details[open] summary::before {
    content: '−';
  }
  .prose .mt-3 {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 3px solid var(--signal-violet);
    color: var(--text-color-light);
  }
</style>