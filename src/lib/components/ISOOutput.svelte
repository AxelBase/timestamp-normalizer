<script>
	import { appState } from '$lib/stores/appState';
	import CopyButton from './CopyButton.svelte';
	import { onMount, onDestroy } from 'svelte';

	// Luxon will be loaded **only on the client**
	let DateTime = null;
	let luxonLoaded = false;

	onMount(async () => {
		try {
			const mod = await import('luxon');
			DateTime = mod.DateTime;
			luxonLoaded = true;
		} catch (e) {
			console.error('[ISOOutput] Luxon load failed', e);
		}
	});

	// Store subscription
	let state = {
		input: '',
		parsed: null,
		isoUTC: '',
		isoOffset: '',
		sourceTZ: ''
	};
	const unsub = appState.subscribe((s) => (state = s));

	onDestroy(() => {
		if (unsub) unsub();
	});
</script>

{#if state.parsed && luxonLoaded}
	<div class="mt-4">
		<div>
			<h5 class="card-title mb-3" style="font-weight: 600;">Conversion Results</h5>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<strong>Original Input:</strong>
					<span class="text-muted" style="word-break: break-all;">{state.input}</span>
				</li>
				<li class="list-group-item">
					<strong>Parsed Local Time:</strong>
					{state.parsed.toLocaleString(DateTime.DATETIME_FULL)}
				</li>
				<li class="list-group-item">
					<strong>Source Timezone:</strong> {state.sourceTZ}
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<div>
						<strong>ISO UTC:</strong>
						<span class="text-success" style="font-weight: 600;">{state.isoUTC}</span>
					</div>
					<CopyButton text={state.isoUTC} />
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<div>
						<strong>ISO with Offset:</strong>
						<span class="text-primary" style="font-weight: 600;">{state.isoOffset}</span>
					</div>
					<CopyButton text={state.isoOffset} />
				</li>
			</ul>
		</div>
	</div>
{:else if state.parsed}
	<div class="mt-4 text-muted">
		<div class="card-body">Formatting...</div>
	</div>
{/if}

<style>
	.list-group-item {
		background: transparent;
		border-color: var(--glass-border);
		padding: 1rem 0.25rem;
	}
	.list-group-item:last-child {
		border-bottom: none;
	}
	.list-group-item:first-child {
		border-top: none;
	}
</style>