import { types } from 'mobx-state-tree';

import initialState from '../utils/initialState';
import { pallets, errors } from '../utils/data';

import Pallets from './Pallets';

const Store = types
  .model({
    pallets: types.optional(Pallets, {}),
    // errors: types.array(ErrorItem),
  })
  .actions(self => ({
    load: () => {
      self.pallets.items = pallets;
      // self.errors = errors;
    },

    afterCreate: () => {
      setTimeout(() => {
        self.load();
      }, 500);
    },
  }))
  .create(initialState);

export default Store;
