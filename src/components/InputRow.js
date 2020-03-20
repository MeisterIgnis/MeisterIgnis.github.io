import React from 'react';
import '../css/input.css';

function InputRow({ b, d, v, n }) {
  console.log(b, d, v, n);
  return (
    <div className="tr">
      <span className="td">
        <input type="text"></input>1
      </span>
      <span className="td">
        <input type="text"></input>
        {b}
      </span>
      <span className="td">
        <input type="text"></input>d
      </span>
      <span className="td">
        <input type="text"></input>v
      </span>
      <span className="td">
        <input type="text"></input>n
      </span>
    </div>
  );
}

export default InputRow;
