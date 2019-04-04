import { types } from 'mobx-state-tree';

const Errors = types.model({
  title: types.maybeNull(types.string),
  dim: types.maybeNull(types.string),
  weight: types.maybeNull(types.union(types.number, types.string)),
});

export default Errors;
