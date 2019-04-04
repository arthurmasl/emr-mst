import React from 'react';
import { observer } from 'mobx-react-lite';

const TableRow = ({ pallet, errorMessage }) => {
  const fields = Object.entries(pallet);

  return (
    <tr>
      {fields.map(([key, value], idx) => (
        <td key={idx} className="field">
          <input
            type="text"
            value={value || ''}
            onChange={e => pallet.editField(key, e.target.value)}
            className="field-input"
          />
          {value === null && (
            <span className="badge badge-danger float-right field-badge">
              {errorMessage(key)}
            </span>
          )}
        </td>
      ))}
    </tr>
  );
};

export default observer(TableRow);
