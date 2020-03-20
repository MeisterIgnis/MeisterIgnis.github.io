import React from 'react';
import '../css/input.css';
import InputRow from './InputRow';

function InputField(...state) {
  var Bezeichnung = state.Bezeichnung;
  var Dauer = state.Dauer;
  var Vorgänger = state.Vorgänger;
  var Nachfolger = state.Nachfolger;
  console.table(state.Nachfolger);
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
        <InputRow b={Bezeichnung} />
        <InputRow />
        <InputRow />
      </div>
    </div>
  );
}

export default InputField;
