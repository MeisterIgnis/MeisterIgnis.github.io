import React from 'react';
import ConnectedOperationNode from '../containers/ConnectedOperationNode';
import ConnectedInputField from '../containers/ConnectedInputField';

function App() {
  return (
    <div>
      <ConnectedInputField />
      <ConnectedOperationNode />
    </div>
  );
}

export default App;
