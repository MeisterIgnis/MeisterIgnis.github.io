import React from 'react';
import '../css/input.css';

const InputRow = (state) => {
  console.table(state)
  const {Nr, Bezeichnung, Dauer, Vorgänger, Nachfolger} = state.state
  const {changeNr, changeBezeichnung, changeDauer, changeVorgänger, changeNachfolger} = state

  return (
    <div className="tr">
      <span className="td">
        <input type="text" defaultValue={Nr} onChange={e => changeNr(e.target.value)}></input>
      </span>
      <span className="td">
        <input type="text" defaultValue={Bezeichnung} onChange={e => changeBezeichnung(e.target.value)}></input>
      </span>
      <span className="td">
        <input type="text" defaultValue={Dauer} onChange={e => changeDauer(e.target.value)}></input>
      </span>
      <span className="td">
        <input type="text" defaultValue={Vorgänger[Nr]} onChange={e => changeVorgänger(e.target.value)}></input>
      </span>
      <span className="td">
        <input type="text" defaultValue={Nachfolger[Nr]} onChange={e => changeNachfolger(e.target.value)}></input>
      </span>
    </div>
  );
};

function InputField(state) {
  console.table(state)
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
        <InputRow {...state}/>
      </div>
    </div>
  );
}

export default InputField;
