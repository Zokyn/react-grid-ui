export function handleChangeSize(
  value: string,
  setSize: (size: number) => void
) {
  const MIN = 3;
  const MAX = 7;

  const size = parseInt(value);
  if (size <= 0) setSize(MIN);
  else if (size > MAX) setSize(MAX);
  else setSize(size);
}
