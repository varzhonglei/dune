

export const getTableIdFromUrl = (url: string) => {
  const regex = /table\/(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}