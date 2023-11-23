import './App.css';
import { useState, useEffect } from 'react';

const Person = (props) => {
  return (
    <>
      <h1> Library App</h1>
      
    </>
  )
}
/*
const Book = (props) => {
  return (
    <>
      <h2> {props.word} Book </h2>
    </>
  )
}
const App = () => {
  return (
    <div className="App">
      <Person/>
      <Book word='Add'/>
      <Book word='Edit'/>
      <Book word='Delete'/>
    </div>
  );
}
*/
const App = () => {
  const [counter, setCounter] = useState(0);

  //effect happens only when component is loaded
  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <div className="App">
      <button onClick={() => {setCounter((prevCount) => prevCount -1)}}> - </button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter((prevCount) => prevCount +1)}}>+</button>
    </div>
  );
}

export default App;
