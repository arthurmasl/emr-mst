import React from 'react';
import { observer } from 'mobx-react-lite';

const Table = ({ pallets }) =>
  pallets.items.length ? (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          {pallets.sectionsView.map((section, i) => (
            <th key={i}>{section}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {pallets.itemsView.map((pallet, id) => (
          <tr key={id}>
            <td>{pallet.title}</td>
            <td>{pallet.dim}</td>
            <td>{pallet.weight}</td>
            <td>0</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>loading..</p>
  );
export default observer(Table);
