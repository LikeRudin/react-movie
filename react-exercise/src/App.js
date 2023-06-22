import React from 'react';
import ReactDOM from 'react-dom/client';

import Btn from './Btn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Start
        <Btn btnName="Hello"/>
      </header>
    </div>
  );
}

export default App;
