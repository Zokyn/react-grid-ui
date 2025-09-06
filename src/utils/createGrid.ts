export function createGrid(size: number = 3): number[][] {
  const rows = size;
  const columns = size;

  const grid = Array.from({ length: rows }, () => Array(columns).fill(0));
  return grid;
}
