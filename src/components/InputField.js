import React from 'react';
import '../css/input.css';

const InputRow = (node, state) => {
  console.log(state);

  const { Nr, Bezeichnung, Dauer, Vorgänger, Nachfolger } = node.data;
  const {
    changeNr,
    changeBezeichnung,
    changeDauer,
    changeVorgänger,
    changeNachfolger
  } = state;

  var vorG = '';
  var nachV = '';
  Vorgänger.forEach(e => {
    vorG += e.toString() + ', ';
  });
  Nachfolger.forEach(e => {
    nachV += e.toString() + ', ';
  });

  vorG = vorG.substring(0, vorG.length - 2);
  nachV = nachV.substring(0, nachV.length - 2);

  return (
    <div className="tr">
      <span className="td">
        <input
          type="text"
          value={Nr}
          onChange={e => changeNr(e.target.value, Nr)}
        ></input>
      </span>
      <span className="td">
        <input
          type="text"
          defaultValue={Bezeichnung}
          onChange={e => changeBezeichnung(e.target.value, Nr)}
        ></input>
      </span>
      <span className="td">
        <input
          type="text"
          defaultValue={Dauer}
          onChange={e => changeDauer(e.target.value, Nr)}
        ></input>
      </span>
      <span className="td">
        <input
          type="text"
          defaultValue={vorG}
          onChange={e => changeVorgänger(e.target.value, Nr)}
        ></input>
      </span>
      <span className="td">
        <input
          type="text"
          defaultValue={nachV}
          onChange={e => changeNachfolger(e.target.value, Nr)}
        ></input>
      </span>
    </div>
  );
};

function InputField(
  state,
  changeNr,
  changeBezeichnung,
  changeDauer,
  changeVorgänger,
  changeNachfolger,
  addNode,
  deleteNode
) {
  var nodes = state.state.nodes;
  console.log(state);
  return (
    <div className="table">
      <div>
        <div className="tr">
          <span className="td">Nr.</span>
          <span className="td">Bezeichung</span>
          <span className="td">Dauer</span>
          <span className="td">Vorgänger</span>
          <span className="td">Nachfolger</span>
        </div>
        {nodes.map((e, i) => (
          <InputRow key={i} data={e} />
        ))}
      </div>
      <input
        type="button"
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2"
        value="Add Node"
        onClick={addNode}
      ></input>
      <input
        type="button"
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2"
        value="Delete Node"
        onClick={deleteNode}
      ></input>
    </div>
  );
}

export default InputField;
