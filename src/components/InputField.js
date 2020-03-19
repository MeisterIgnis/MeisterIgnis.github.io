import React from 'react';
import '../css/input.css';
import InputRow from './InputRow';

function InputField() {
  const cellClass = 'border px-12 py-4';
  const inputCell =
    'appearance-none block h-full w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white';
  return (
    <div class="table">
      <div>
        <div class="tr">
          <span class="td">Nr.</span>
          <span class="td">Bezeichung</span>
          <span class="td">Dauer</span>
          <span class="td">Vorgänger</span>
          <span class="td">Nachfolger</span>
        </div>
        <InputRow />
        <InputRow />
        <InputRow />
      </div>
    </div>
  );
}

export default InputField;
