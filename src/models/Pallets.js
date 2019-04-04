import { types, getSnapshot } from 'mobx-state-tree';
import Field from './Field';

const Pallets = types
  .model({
    pallets: types.array(Field),
    errors: types.array(Field),
  })
  .actions(self => ({
    sendToApi: () => {
      if (self.emptyCount === 0) {
        console.table(getSnapshot(self.palletsView));
      }
    },
  }))
  .views(self => ({
    get sectionsView() {
      const sections = Object.keys(self.pallets[0]);
      // sections.push('count');
      return sections;
    },
    get palletsView() {
      return self.pallets;
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
      return self.errors[id][key];
    },
  }));

export default Pallets;
