import { types, getSnapshot } from 'mobx-state-tree';
import Field from './Field';

const groupItems = items => {
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

const Pallets = types
  .model({
    pallets: types.array(Field),
    errors: types.array(Field),
  })
  .actions(self => ({
    sendToApi: () => {
      if (self.emptyCount === 0) {
        console.table(getSnapshot(self.pallets));
      }
    },
  }))
  .views(self => ({
    get sectionsView() {
      const sections = Object.keys(self.pallets[0]);
      sections.push('count');
      return sections;
    },
    get errorsView() {
      return groupItems(self.errors);
    },
    get palletsView() {
      return groupItems(self.pallets);
    },
    get emptyCount() {
      let emptyCount = 0;

      self.pallets.forEach(pallet =>
        Object.values(pallet).forEach(item => {
          if (item === null) emptyCount += 1;
        })
      );

      return emptyCount;
    },
    errorMessage(id, key) {
      return self.errorsView[id][0][key];
    },
  }));

export default Pallets;
