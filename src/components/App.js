import React from 'react';
import OperationNode from './OperationNode';
import ConnectedInputField from '../containers/ConnectedInputField';

function App() {
  return (
    <div>
      <ConnectedInputField />
      <OperationNode />
    </div>
  );
}

export default App;
