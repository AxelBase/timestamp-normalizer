<!-- src/lib/components/ErrorMessage.svelte -->
<script>
  import { appState } from '$lib/stores/appState';

  let error = '';

  appState.subscribe(state => {
    error = state.error;
  });
</script>

{#if error}
  <div class="alert alert-danger" role="alert">
    {error}
  </div>
{/if}

<style>
  /* Optional */
</style>