export function handleSelect(
  value: string,
  setSelected: (selectedIndex: number) => void
) {
  const index = parseInt(value); // string -> number;
  setSelected(index);
}
