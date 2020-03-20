import React from 'react';
import '../css/input.css';

const InputRow = (state) => {
  const {Bezeichnung, Dauer, Vorgänger, Nachfolger} = state.state

  return (
    <div className="tr">
      <span className="td">
        <input type="text"></input>
        1
      </span>
      <span className="td">
        <input type="text"></input>
        {Bezeichnung}
      </span>
      <span className="td">
        <input type="text"></input>
        {Dauer}
      </span>
      <span className="td">
        <input type="text"></input>
        {Vorgänger}
      </span>
      <span className="td">
        <input type="text"></input>
        {Nachfolger}
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
