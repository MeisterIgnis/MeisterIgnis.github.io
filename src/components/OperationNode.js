import React from 'react';

function operationNode() {
  const cellClass = 'border px-12 py-4';
  return (
    <div>
      <table className="table-fixed">
        <tr>
          <td className={cellClass}></td>
          <td className={cellClass}></td>
          <td className={cellClass}></td>
        </tr>
        <tr>
          <td className={cellClass}></td>
        </tr>
        <tr>
          <td className={cellClass}></td>
          <td className={cellClass}></td>
          <td className={cellClass}></td>
        </tr>
      </table>
    </div>
  );
}

export default operationNode;
