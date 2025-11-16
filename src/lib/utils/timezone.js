export function getLocalTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch (err) {
    console.error('[timezone.js] getLocalTimezone error:', err);
    return 'UTC';
  }
}

export function getTimezones() {
  try {
    return Intl.supportedValuesOf('timeZone');
  } catch (err) {
    console.error('[timezone.js] getTimezones error:', err);
    return [];
  }
}