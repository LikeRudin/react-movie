import React from 'react';
import ReactDOM from 'react-dom/client';

import Btn from './Btn';

function App() {

  const [count, setCount] = React.useState(0);

  const onClick = () => {
    console.log("this should run for every change of state");
    setCount((count)=> count + 1);
  };

  const callApi = () => console.log("this should be runned only one-time");
  
  React.useEffect(callApi, []);

  return (
    <div className="App">
      <header className="App-header">
        clicked: {count}
        <Btn btnName="Hello" onClick={onClick}/>
      </header>
    </div>
  );
}

export default App;
