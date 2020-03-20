import React from 'react';
import '../css/input.css';

const InputRow = node => {
  console.log(node);
  const { Nr, Bezeichnung, Dauer, Vorgänger, Nachfolger } = node.data;
  const {
    changeNr,
    changeBezeichnung,
    changeDauer,
    changeVorgänger,
    changeNachfolger
  } = node;

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
        <input type="text" value={Nr}></input>
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

function InputField(state) {
  var nodes = state.state.nodes;
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
          <InputRow key={i} data={e} /* {...state} */ />
        ))}
      </div>
    </div>
  );
}

export default InputField;
