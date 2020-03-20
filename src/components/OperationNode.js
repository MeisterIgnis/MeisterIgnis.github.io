import React from 'react';

const Node = node => {
  const { Bezeichnung, Dauer } = node.data;
  return (
    <div>
      <table className="table-auto">
        <tbody>
          <tr>
            <td className="border px-12 py-4 bg-red-200">FAZ</td>
            <td className="border px-12 py-4 bg-green-200">{Dauer}</td>
            <td className="border px-12 py-4 bg-blue-200">FEZ</td>
          </tr>
          <tr>
            <td className="border px-12 py-4 bg-gray-200">{Bezeichnung}</td>
          </tr>
          <tr>
            <td className="border px-12 py-4 bg-red-300">SAZ</td>
            <td className="border px-12 py-4 bg-green-300">GP</td>
            <td className="border px-12 py-4 bg-blue-300">SEZ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function OperationNode(state) {
  const { Bezeichnung, Dauer } = state.state;
  const nodes = state.state.nodes;
  console.table(nodes);
  {
    return (
      <div>
        {nodes.map((e, i) => (
          <Node key={i} data={e} />
        ))}
      </div>
    );
  }
}

export default OperationNode;
