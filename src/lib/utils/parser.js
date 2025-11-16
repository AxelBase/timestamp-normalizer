import { DateTime } from 'luxon';

export function parseTimestamp(input, timezone = 'utc') {
  try {
    if (!input?.trim()) throw new Error('Input is empty');

    const trimmed = input.trim();

    // Unix timestamp (seconds or ms)
    if (/^\d+$/.test(trimmed)) {
      const num = Number(trimmed);
      return trimmed.length > 10
        ? DateTime.fromMillis(num, { zone: timezone })
        : DateTime.fromSeconds(num, { zone: timezone });
    }

    // Try Luxon built-ins
    let dt = DateTime.fromISO(trimmed, { zone: timezone });
    if (dt.isValid) return dt;

    dt = DateTime.fromRFC2822(trimmed, { zone: timezone });
    if (dt.isValid) return dt;

    dt = DateTime.fromSQL(trimmed, { zone: timezone });
    if (dt.isValid) return dt;

    dt = DateTime.fromHTTP(trimmed, { zone: timezone });
    if (dt.isValid) return dt;

    // Common manual formats
    const formats = [
      'yyyy-MM-dd HH:mm:ss',
      'yyyy-MM-dd HH:mm',
      'MM/dd/yyyy HH:mm:ss',
      'MM/dd/yyyy h:mm a',
      'dd-MM-yyyy HH:mm',
      'MMM dd yyyy HH:mm',
      'yyyy/MM/dd HH:mm'
    ];
    for (const f of formats) {
      dt = DateTime.fromFormat(trimmed, f, { zone: timezone });
      if (dt.isValid) return dt;
    }

    // Fallback to native JS Date
    const js = new Date(trimmed);
    if (!isNaN(js)) return DateTime.fromJSDate(js, { zone: timezone });

    throw new Error('Invalid timestamp format');
  } catch (err) {
    console.error('[parser.js] parsing failed:', err);
    throw err;   // re-throw so UI can show the message
  }
}