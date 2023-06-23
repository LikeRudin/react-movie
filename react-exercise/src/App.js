import React from 'react';
import ReactDOM from 'react-dom/client';

import Btn from './Btn';

function App() {

  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState("");

  console.log("always");

  const onClick = () => {
    
    setCount((count)=> count + 1);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  }
  
  
  const callApi = () => console.log("this should be runned only one-time");
  const sayClick = () => {
    if (count !== 0) {
      console.log("run for click");
    }
  };
  const sayChange = () => {
    if (value !== "") {
      console.log("run for type");
    }
  };
  const sayBoth = () => {
    if (value !== "" || count !==0) {
      console.log("run for click or type");
    }
  };

  React.useEffect(callApi, []);
  React.useEffect(sayClick, [count]);
  React.useEffect(sayChange, [value]);
  React.useEffect(sayBoth, [count, value]);


  return (
    <div className="App">
      <header className="App-header">
        clicked: {count}
        <Btn btnName="Hello" onClick={onClick}/>
      </header>
      <input type='text' placeholder='Search' onChange={onChange}/>
    </div>
  );
}

export default App;
