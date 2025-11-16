import { DateTime } from 'luxon';

export function convertToISO(dt) {
  try {
    if (!dt?.isValid) throw new Error('Invalid DateTime object');

    const isoUTC = dt.toUTC().toISO({ suppressMilliseconds: true, includeOffset: true });
    const isoOffset = dt.toISO({ suppressMilliseconds: true, includeOffset: true });

    return { isoUTC, isoOffset };
  } catch (err) {
    console.error('[converter.js] conversion error:', err);
    throw err;
  }
}