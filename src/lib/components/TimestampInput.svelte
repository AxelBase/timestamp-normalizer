<!-- src/lib/components/TimestampInput.svelte -->
<script>
  import { appState } from '$lib/stores/appState';
  import { get } from 'svelte/store';
  import { parseTimestamp } from '$lib/utils/parser';
  import { convertToISO } from '$lib/utils/converter';

  let localInput = '';

  appState.subscribe(state => {
    localInput = state.input;
  });

  async function handleInput(event) {
    const value = event.target.value;

    try {
      appState.update(state => ({
        ...state,
        input: value,
        error: '',
        parsed: null,
        isoUTC: '',
        isoOffset: '',
        sourceTZ: ''
      }));

      if (!value.trim()) return;

      const state = get(appState);
      const parsed = parseTimestamp(value, state.timezone);
      const { isoUTC, isoOffset } = convertToISO(parsed);

      appState.update(s => ({
        ...s,
        parsed,
        isoUTC,
        isoOffset,
        sourceTZ: parsed.zoneName
      }));
    } catch (err) {
      console.error('[TimestampInput] parsing error:', err);
      appState.update(s => ({ ...s, error: err.message }));
    }
  }
</script>

<div class="mb-3">
  <label for="timestampInput" class="form-label">Enter Timestamp</label>
  <input
    type="text"
    class="form-control"
    id="timestampInput"
    placeholder="e.g., 2025-11-16 12:27 or 1731752820000"
    bind:value={localInput}
    on:input={handleInput}
  />
</div>