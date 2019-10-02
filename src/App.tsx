import React, { useState} from 'react';
import BoxContainer from './components/BoxContainer'
import './App.css';

const App: React.FC = () => {
  const [numberOfColumns, setNumbers] = useState(Array(0));
  function handleChange(inputText: string){
    let parts = inputText.split('/');
    let numberOfColumns = parts.map((el, key)=> isNaN(parseInt(el, 10))?0 : parseInt(el, 10) )
    setNumbers(numberOfColumns)
  }
  return (
    <div className="App">
      <input type="text" onChange={(e)=> handleChange(e.target.value)}/>
      <BoxContainer numberOfColumns={numberOfColumns}/>
    </div>
  );
}

export default App;
