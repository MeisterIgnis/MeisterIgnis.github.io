import React from 'react';

function OperationNode() {
  const cellClass = 'border px-12 py-4 bg-red-200';
  return (
    <div>
      <table className="table-auto">
        <tr>
          <td className="border px-12 py-4 bg-red-200"></td>
          <td className="border px-12 py-4 bg-green-200"></td>
          <td className="border px-12 py-4 bg-blue-200"></td>
        </tr>
        <tr>
          <td className="border px-12 py-4 bg-gray-200"></td>
        </tr>
        <tr>
          <td className="border px-12 py-4 bg-red-300"></td>
          <td className="border px-12 py-4 bg-green-300"></td>
          <td className="border px-12 py-4 bg-blue-300"></td>
        </tr>
      </table>
    </div>
  );
}

export default OperationNode;
