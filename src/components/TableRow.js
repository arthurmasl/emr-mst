import React from 'react';
import { observer } from 'mobx-react-lite';

const TableRow = ({ pallet, errorMessage, isJoined }) => {
  const fields = isJoined
    ? [...Object.entries(pallet[0]), ['count', pallet.length]]
    : [...Object.entries(pallet), ['count', 1]];

  return (
    <tr>
      {fields.map(([key, value], idx) => (
        <td key={idx} className="field align-middle">
          {key !== 'count' ? (
            <input
              type="text"
              value={value || ''}
              onChange={e =>
                isJoined
                  ? pallet.map(item => item.editField(key, e.target.value))
                  : pallet.editField(key, e.target.value)
              }
              className="field-input"
            />
          ) : (
            value
          )}
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
