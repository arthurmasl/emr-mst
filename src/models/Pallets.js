import { types } from 'mobx-state-tree';

const PalletItem = types.model({
  title: types.maybeNull(types.string),
  dim: types.maybeNull(types.string),
  weight: types.maybeNull(types.union(types.number, types.string)),
});

const Pallets = types
  .model({
    items: types.array(PalletItem),
    sections: types.array(types.string),
  })
  .views(self => ({
    get sectionsView() {
      const sections = Object.keys(self.items[0]);
      sections.push('count');
      return sections;
    },
    get itemsView() {
      return self.items;
    },
  }));

export default Pallets;
