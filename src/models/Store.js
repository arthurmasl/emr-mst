import { types } from 'mobx-state-tree';

import initialState from '../utils/initialState';
import { pallets, errors } from '../utils/data';

import Pallets from './Pallets';

const Store = types
  .model({
    data: types.optional(Pallets, {}),
  })
  .actions(self => ({
    load: () => {
      self.data.pallets = pallets;
      self.data.errors = errors;
    },

    afterCreate: () => {
      setTimeout(() => {
        self.load();
      }, 500);
    },
  }))
  .create(initialState);

export default Store;
