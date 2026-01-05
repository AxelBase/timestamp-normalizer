<script lang="ts">
    import { base } from '$app/paths';
    import { fly } from 'svelte/transition';

    // Import Bootstrap CSS
    import 'bootstrap/dist/css/bootstrap.min.css';
    // Import our theme
    import '../app.css';

    // --- "Buy me a coffee" + Bitcoin Logic (from File 1) ---
    let isDropdownOpen = false;

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }
    function closeDropdown() {
        isDropdownOpen = false;
    }

    // Click outside directive
    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        };
        document.addEventListener('click', handleClick, true);
        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }
</script>

<header class="app-header">
    <nav class="container">
        <div class="nav-left">
            <a href="{base}/" class="nav-brand" aria-label="Home">
                <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="nav-logo" />
                <span class="nav-brand-text">AxelBase</span>
            </a>
        </div>

        <div class="nav-right">
            <ul class="nav-links">
                <li><a class="nav-link" href="{base}/">Home</a></li>
                <li><a class="nav-link" href="#about">About</a></li>
                <li><a class="nav-link" href="#how-to-use">How to use</a></li>
                <li><a class="nav-link" href="#faq">FAQ</a></li>
                <li><a class="nav-link" href="{base}/blog">Blog</a></li>
            </ul>

            <div class="bmac-wrapper" use:clickOutside on:click_outside={closeDropdown}>
                <button class="bmac-button" on:click={toggleDropdown} aria-haspopup="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
                    </svg>
                    <span>Buy me a coffee</span>
                </button>

                {#if isDropdownOpen}
                    <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$3</span> One Coffee
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$5</span> Two Coffees
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$10</span> Three Coffees
                        </a>

                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                            Custom Amount
                        </a>

                        <a
                            href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                            on:click={closeDropdown}
                            class="custom-amount"
                        >
                            Buy via Crypto (Bitcoin)
                        </a>
                    </div>
                {/if}
            </div>
        </div>
    </nav>
</header>

<slot />

<footer class="app-footer">
    <div class="container footer-content">
        <span class="copyright"
            >&copy; AxelBase – {new Date().getFullYear()}</span
        >
        <div class="footer-links">
            <a href="{base}/privacy">Privacy</a>
            <a href="{base}/terms">Terms</a>
        </div>
    </div>
</footer>

<style>
    /* --- Header / Navbar (unchanged from File 2) --- */
    .app-header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1030;
        padding: 0.75rem 0;
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--glass-border);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .app-header nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-left,
    .nav-right {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .nav-brand {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .nav-logo {
        height: 32px;
        width: 32px;
        margin-right: 0.75rem;
        transition: transform 0.3s ease;
    }

    .nav-brand:hover .nav-logo {
        transform: rotate(15deg) scale(1.1);
    }

    .nav-brand-text {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--signal-violet);
        text-decoration: none;
    }

    .nav-links {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        gap: 1.75rem;
    }

    .nav-link {
        text-decoration: none;
        color: var(--text-color-light);
        font-weight: 600;
        position: relative;
        padding-bottom: 4px;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--signal-violet);
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    .nav-link:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    .nav-link:hover {
        color: var(--signal-violet);
    }

    /* --- Buy Me a Coffee – Button & Dropdown styles adapted from File 1 but fitted to File 2's theme --- */
    .bmac-wrapper {
        position: relative;
    }

    .bmac-button {
        background: var(--signal-violet);
        color: var(--white);
        border: none;
        border-radius: 50px;
        padding: 0.5rem 1.25rem;
        font-weight: 600;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(146, 78, 125, 0.3);
    }

    .bmac-button:hover {
        background: #7a3f67; /* darker violet for hover */
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(146, 78, 125, 0.4);
    }

    .bmac-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        width: 240px;
        background: var(--white);
        border-radius: 16px;
        box-shadow: var(--glass-shadow);
        overflow: hidden;
        border: 1px solid var(--glass-border);
        z-index: 1000;
    }

    .bmac-dropdown a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        color: #333;
        text-decoration: none;
        font-size: 0.98rem;
        transition: all 0.2s ease;
    }

    .bmac-dropdown a:hover {
        background: #f3eef2; /* light violet tint */
        color: var(--signal-violet);
        padding-left: 28px;
    }

    .bmac-dropdown .amount {
        font-weight: 700;
        color: var(--signal-violet);
        font-size: 1.1rem;
    }

    .bmac-dropdown .custom-amount {
        font-weight: 600;
        color: var(--signal-violet);
        border-top: 1px solid #eee;
        justify-content: center !important;
    }

    /* --- Footer (unchanged from File 2) --- */
    .app-footer {
        position: relative;
        bottom: 0;
        width: 100%;
        padding: 1rem 0;
        z-index: 1030;
        font-size: 0.9rem;
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-top: 1px solid var(--glass-border);
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .copyright {
        color: var(--text-color-light);
    }

    .footer-links {
        display: flex;
        gap: 1.5rem;
    }

    .footer-links a {
        color: var(--text-color-light);
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .footer-links a:hover {
        color: var(--signal-violet);
        text-decoration: underline;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        .nav-right {
            gap: 0.5rem;
        }
        .nav-links {
            display: none;
        }
        .bmac-button span {
            display: none;
        }
        .bmac-button {
            padding: 0.5rem;
            border-radius: 50%;
        }
    }
</style>