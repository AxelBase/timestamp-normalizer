<script>
	import { appState } from '$lib/stores/appState';
	import { get } from 'svelte/store';
	import { getTimezones, getLocalTimezone } from '$lib/utils/timezone';
	import { parseTimestamp } from '$lib/utils/parser';
	import { convertToISO } from '$lib/utils/converter';
	import { onMount, onDestroy } from 'svelte';

	let timezones = [];
	let localTZ = 'UTC';
	let selectedTZ = 'UTC';
	let autoDetect = true;
	let unsub;

	onMount(() => {
		try {
			timezones = getTimezones();
			// --- ❗ FIX: Corrected typo getLocalTimetime -> getLocalTimezone ---
			localTZ = getLocalTimezone();
			selectedTZ = localTZ;

			unsub = appState.subscribe((s) => {
				selectedTZ = s.timezone;
				autoDetect = s.autoDetect;
			});
		} catch (e) {
			console.error('[TimezoneSelect] mount error:', e);
		}
	});

	onDestroy(() => {
		if (unsub) unsub();
	});

	function handleToggle() {
		try {
			autoDetect = !autoDetect;
			const tz = autoDetect ? localTZ : selectedTZ;

			appState.update((s) => ({
				...s,
				autoDetect,
				timezone: tz,
				error: '',
				parsed: null,
				isoUTC: '',
				isoOffset: '',
				sourceTZ: ''
			}));

			reparseIfNeeded(tz);
		} catch (e) {
			console.error('[TimezoneSelect] toggle error:', e);
			appState.update((s) => ({ ...s, error: e.message }));
		}
	}

	function handleSelect(event) {
		try {
			const tz = event.target.value;
			selectedTZ = tz;

			if (!autoDetect) {
				appState.update((s) => ({ ...s, timezone: tz }));
				reparseIfNeeded(tz);
			}
		} catch (e) {
			console.error('[TimezoneSelect] select error:', e);
			appState.update((s) => ({ ...s, error: e.message }));
		}
	}

	// Helper to re-parse current input
	function reparseIfNeeded(tz) {
		const state = get(appState);
		if (state.input.trim()) {
			try {
				const parsed = parseTimestamp(state.input, tz);
				const { isoUTC, isoOffset } = convertToISO(parsed);
				appState.update((s) => ({
					...s,
					parsed,
					isoUTC,
					isoOffset,
					sourceTZ: parsed.zoneName
				}));
			} catch (e) {
				console.error('[TimezoneSelect] reparse error:', e);
				appState.update((s) => ({ ...s, error: e.message }));
			}
		}
	}
</script>

<div class="mb-3">
  <div class="d-flex align-items-center mb-2">
    <label
      for="autoDetectToggle"
      class="form-label me-3 mb-0"
      style="white-space: nowrap;"
    >
      Auto-Detect ({localTZ}):
      <span class="fw-bold" class:text-success={autoDetect} class:text-danger={!autoDetect}>
        {autoDetect ? 'ON' : 'OFF'}
      </span>
    </label>
    <button
      id="autoDetectToggle"
      class="btn btn-sm btn-primary"
      on:click={handleToggle}
    >
      Toggle
    </button>
  </div>

  {#if !autoDetect}
    <div class="mt-3 fade-in-up">
      <label for="timezoneSelect" class="form-label">Select Timezone</label>
      <select
        class="form-select"
        id="timezoneSelect"
        bind:value={selectedTZ}
        on:change={handleSelect}
      >
        {#each timezones as tz}
          <option value={tz}>{tz}</option>
        {/each}
      </select>
    </div>
  {/if}
</div>