<script>
	export let text = '';
	let feedback = 'Copy';
	let copied = false;

	async function copyToClipboard() {
		if (copied) return;

		try {
			await navigator.clipboard.writeText(text);
			feedback = 'Copied!';
			copied = true;
			setTimeout(() => {
				feedback = 'Copy';
				copied = false;
			}, 2000);
		} catch (err) {
			feedback = 'Failed';
			setTimeout(() => {
				feedback = 'Copy';
			}, 2000);
		}
	}
</script>

<button
	class="btn-copy"
	on:click={copyToClipboard}
	class:copied
	aria-label="Copy to clipboard"
>
	<span class="icon">
		{#if copied}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				viewBox="0 0 16 16"
			>
				<path
					d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				viewBox="0 0 16 16"
			>
				<path
					d="M13.5 1a1 1 0 0 1 1 1v10.793a1.5 1.5 0 0 1-.44 1.06l-1.5 1.5a1.5 1.5 0 0 1-1.06.44H3.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10.5zM2 2v12a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .354-.146l1.5-1.5A.5.5 0 0 0 13.5 13.793V2H2z"
				/>
				<path
					d="M5 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zM5 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM5 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
				/>
			</svg>
		{/if}
	</span>
	<span class="feedback">{feedback}</span>
</button>

<style>
	.btn-copy {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		border: 1px solid var(--glass-border);
		background: rgba(255, 255, 255, 0.6);
		color: var(--signal-violet);
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	.btn-copy:hover {
		background: var(--white);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transform: scale(1.05);
	}
	.btn-copy.copied {
		background: var(--signal-violet);
		color: var(--white);
		border-color: var(--signal-violet);
	}
	.icon {
		margin-top: -2px;
	}
</style>