import React from 'react';
import '../css/App.css';

const Node = node => {
  const { Nr, Bezeichnung, Dauer, FAZ, SEZ, FEZ, SAZ, Position } = node.data;
  const GP = SEZ - FEZ;

  const index = Nr + 1;
  const gridNumber = 'm-5 w-2 elem' + Position[1] + Position[0];
  console.log(gridNumber);
  return (
    <div className={gridNumber}>
      <table className="w-2">
        <tbody>
          <tr>
            <td className="border px-12 py-4 bg-red-200 truncate">{FAZ}</td>
            <td className="border px-12 py-4 bg-green-200 truncate">{Dauer}</td>
            <td className="border px-12 py-4 bg-blue-200 truncate">{FEZ}</td>
          </tr>
          <tr>
            <td
              className="border px-12 py-4 bg-gray-200 truncate w-16"
              colSpan="3"
              align="center"
            >
              {Bezeichnung}
            </td>
          </tr>
          <tr>
            <td className="border px-12 py-4 bg-red-300 truncate">{SAZ}</td>
            <td className="border px-12 py-4 bg-green-300 truncate">{GP}</td>
            <td className="border px-12 py-4 bg-blue-300 truncate">{SEZ}</td>
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

  var otherClassName = 'container';

  return (
    <div className={otherClassName}>
      {nodes.map((e, i) => (
        <Node key={i} data={e} />
      ))}
    </div>
  );
}

export default OperationNode;
