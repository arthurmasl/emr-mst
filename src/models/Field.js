import { types } from 'mobx-state-tree';

const Field = types
  .model({
    title: types.maybeNull(types.string),
    dim: types.maybeNull(types.string),
    weight: types.maybeNull(types.union(types.number, types.string)),
  })
  .actions(self => ({
    editField: (key, value) => {
      console.log(self);

      if (key === 'weight') {
        if (!isNaN(value)) self[key] = parseInt(value);
      } else {
        self[key] = value;
      }

      if (value.length === 0) {
        self[key] = null;
      }
    },
  }));

export default Field;
