import { types, getSnapshot } from 'mobx-state-tree';
import { groupItems } from '../utils/helpers';

import Field from './Field';
import Errors from './Errors';

const Pallets = types
  .model({
    pallets: types.array(Field),
    errors: types.array(Errors),
    joined: types.boolean,
  })
  .actions(self => ({
    sendToApi: () => {
      if (self.emptyCount === 0) {
        console.table(getSnapshot(self.pallets));
      }
    },
    changeJoined: () => {
      self.joined = !self.joined;
    },
  }))
  .views(self => ({
    get isJoined() {
      return self.joined;
    },
    get sectionsView() {
      return [...Object.keys(self.pallets[0]), 'count'];
    },
    get errorsView() {
      return self.joined ? groupItems(self.errors) : self.errors;
    },
    get palletsView() {
      return self.joined ? groupItems(self.pallets) : self.pallets;
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
      return self.joined
        ? self.errorsView[id] && self.errorsView[id][0][key]
        : self.errorsView[id] && self.errorsView[id][key];
    },
  }));

export default Pallets;
