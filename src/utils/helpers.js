export const groupItems = items => {
  const filtered = items.reduce((acc, curr) => {
    acc.push(items.filter(item => JSON.stringify(item) === JSON.stringify(curr)));
    return acc;
  }, []);

  const grouped = filtered.reduce(
    (acc, curr) => {
      if (!JSON.stringify(acc).includes(JSON.stringify(curr))) {
        acc.push(curr);
      }
      return acc;
    },
    [filtered[0]]
  );

  return grouped;
};
