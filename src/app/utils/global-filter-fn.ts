import { normalizeText } from './normalize-text';

export function globalFilterFn(
  row: any,
  columnId: string,
  filterValue: string,
) {
  const value = normalizeText(String(row.getValue(columnId) || ''));
  const search = normalizeText(filterValue);
  return value.includes(search);
}
