export const groupItems = items => {
  const grouped = [[[]]];

  items.forEach(item => {
    const itemValues = Object.values(item);
    const groupedValues = Object.values(grouped[grouped.length - 1][0]);

    if (String(itemValues) === String(groupedValues)) {
      grouped[grouped.length - 1].push(item);
    } else {
      grouped.push([item]);
    }
  });

  grouped.shift();

  return grouped;
};
