<script lang="ts">
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';

	// Import Bootstrap CSS
	import 'bootstrap/dist/css/bootstrap.min.css';
	// Import our new theme
	import '../app.css';

	// --- "Buy me a coffee" Logic ---
	const paypalUsername = 'AxelLab427'; // <-- SET YOUR PAYPAL USERNAME HERE
	const donationAmounts = [1, 3, 5, 10];
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						width="20"
						height="20"
					>
						<path
							d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"
						/>
					</svg>
					<span>Buy me a coffee</span>
				</button>

				{#if isDropdownOpen}
					<div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
						{#each donationAmounts as amount}
							<a
								href="https://paypal.me/{paypalUsername}/{amount}"
								target="_blank"
								rel="noopener noreferrer"
								class="bmac-option"
								on:click={closeDropdown}
							>
								${amount}
							</a>
						{/each}
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
			>&copy; AxelBase Timestamp Normalizer – {new Date().getFullYear()}</span
		>
		<div class="footer-links">
			<a href="{base}/privacy">Privacy</a>
			<a href="{base}/terms">Terms</a>
		</div>
	</div>
</footer>

<style>
	/* --- Header / Navbar --- */
	.app-header {
		position:fixed;
		top: 0;
		width: 100%;
		z-index: 1030;
		padding: 0.75rem 0;
		/* Glassmorphism */
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
	/* Hover underline effect */
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

	/* --- Buy Me a Coffee --- */
	.bmac-wrapper {
		position: relative;
	}

	.bmac-button {
		background: linear-gradient(145deg, var(--signal-violet), #a95e92);
		color: var(--white);
		border: none;
		border-radius: 50px;
		padding: 0.5rem 1.25rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		box-shadow: 0 4px 15px rgba(146, 78, 125, 0.3);
	}

	.bmac-button:hover {
		transform: translateY(-2px) scale(1.03);
		box-shadow: 0 6px 20px rgba(146, 78, 125, 0.4);
	}

	.bmac-dropdown {
		position: absolute;
		top: calc(100% + 10px);
		right: 0;
		background: var(--white);
		border-radius: var(--bs-border-radius);
		box-shadow: var(--glass-shadow);
		border: 1px solid var(--glass-border);
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		min-width: 100px;
	}

	.bmac-option {
		padding: 0.5rem 1rem;
		color: var(--signal-violet);
		font-weight: 600;
		text-decoration: none;
		border-radius: var(--bs-border-radius-sm);
		transition: background-color 0.2s ease;
	}

	.bmac-option:hover {
		background-color: #f3eef2;
	}

	/* --- Footer --- */
	.app-footer {
		position: relative;
		bottom: 0;
		width: 100%;
		padding: 1rem 0;
		z-index: 1030;
		font-size: 0.9rem;
		/* Glassmorphism */
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
			display: none; /* Simplification for this example. Could be a burger menu. */
		}
		.bmac-button span {
			display: none; /* Hide text, show icon */
		}
		.bmac-button {
			padding: 0.5rem;
			border-radius: 50%;
		}
	}
</style>