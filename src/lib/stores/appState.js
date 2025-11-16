// src/lib/stores/appState.js
import { writable } from 'svelte/store';
import { getLocalTimezone } from '$lib/utils/timezone';

export const appState = writable({
  input: '',
  timezone: getLocalTimezone(),
  autoDetect: true,
  parsed: null, // Luxon DateTime object
  error: '',
  isoUTC: '',
  isoOffset: '',
  sourceTZ: ''
});