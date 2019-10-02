import React, { useState} from 'react';
import './App.css';

const App: React.FC = () => {
  const [numbers, setNumbers] = useState(Array(0));
  function handleChange(inputText: string){
    let parts = inputText.split('/');
    let numparts = parts.map((el, key)=> isNaN(parseInt(el, 10))?0 : parseInt(el, 10) )
    console.log('parts',parts, numparts)
    setNumbers(numparts)
  }
  return (
    <div className="App">
      <input type="text" onChange={(e)=> handleChange(e.target.value)}/>
    </div>
  );
}

export default App;
