import React from 'react';
import Table from './Table';

const App = ({ store }) => (
  <div>
    <Table data={store.data} />
  </div>
);
export default App;
