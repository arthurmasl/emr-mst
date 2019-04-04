import React from 'react';
import Table from './Table';

const App = ({ store }) => (
  <div>
    <Table pallets={store.pallets} />
  </div>
);
export default App;
