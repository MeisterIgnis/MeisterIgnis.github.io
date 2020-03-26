import React from 'react';
import '../css/App.css';

const Node = node => {
  const { Nr, Bezeichnung, Dauer, FAZ, SEZ, FEZ, SAZ, Position } = node.data;
  const GP = SEZ - FEZ;

  const index = Nr + 1;
  const gridNumber = 'm-5 w-2 elem' + Position[1] + Position[0];
  return (
    <div className={gridNumber}>
      <table className="max-w-200 min-w-200 table-fixed" width="350">
        <tbody>
          <tr>
            <td className="border px-12 py-4 bg-red-200 w-100 h-10">{FAZ}</td>
            <td className="border px-12 py-4 bg-green-200 w-100 h-10">
              {Dauer}
            </td>
            <td
              className="border px-4 py-4 bg-blue-200 w-100 h-10"
              align="center"
            >
              {FEZ}
            </td>
          </tr>
          <tr>
            <td
              className="border px-12 py-4 bg-gray-200 w-100 h-10"
              colSpan="3"
              align="center"
            >
              {Bezeichnung}
            </td>
          </tr>
          <tr>
            <td className="border px-12 py-4 bg-red-300 w-100 h-10">{SAZ}</td>
            <td className="border px-12 py-4 bg-green-300 w-100 h-10">{GP}</td>
            <td className="border px-12 py-4 bg-blue-300 w-100 h-10">{SEZ}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function OperationNode(state) {
  const nodes = state.state.nodes;
  var numberOfRows = 0;
  var firstColumn = [];
  var secondColumn = [];
  var lastColumn = [];

  nodes.forEach(node => {
    if (node.Nachfolger.length === 0) {
      lastColumn.push(node.Nr);
    }
    if (node.Vorgänger.length === 0) {
      firstColumn.push(node.Nr);
    }
  });
  numberOfRows++;

  var className = 'container';

  className += findHighestColumnPosition(nodes);

  return (
    <div className={className}>
      {nodes.map((e, i) => (
        <Node key={i} data={e} />
      ))}
      <svg width="500" height="500"></svg>
    </div>
  );
}

function findHighestColumnPosition(nodes) {
  var highestColumnPosition = 1;
  nodes.forEach(node => {
    if (node.Position[0] > highestColumnPosition) {
      highestColumnPosition = node.Position[0];
    }
  });
  return highestColumnPosition;
}

export default OperationNode;
