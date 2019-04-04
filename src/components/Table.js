import React from 'react';
import { observer } from 'mobx-react-lite';

import TableRow from './TableRow';

const Table = ({ data }) => (
  <div className="container">
    {data.pallets.length ? (
      <>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {data.sectionsView.map((section, idx) => (
                <th key={idx}>{section}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.pallets.map((pallet, idx) => (
              <TableRow
                pallet={pallet}
                key={idx}
                errorMessage={key => data.errorMessage(idx, key)}
              />
            ))}
          </tbody>
        </table>

        <button
          className="btn btn-primary"
          disabled={data.emptyCount > 0}
          onClick={data.sendToApi}
        >
          SEND TO API
        </button>
      </>
    ) : (
      <p>loading..</p>
    )}
  </div>
);
export default observer(Table);
