export const normalize = str => str.trim().toLowerCase();

export const format = str =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function extractCategories(items) {
  const set = new Set(items.map(i => format(i.category)));
  return ["General", ...set];
}
