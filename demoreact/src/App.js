import './App.css';

import {useState} from 'react';

function Counter() {
  const [counter,setCounter] = useState(0);
  const increment=()=>{
    setCounter(counter+1)
  }

  const decrement=()=>{
    setCounter(counter-1)
  }

  const Reset=()=>{
    setCounter(0);
  }

  let a="React Counter"
  return (
    <div className="App">
      <div>
      {a}
      </div>
      <div>
      <sanp>{counter}</sanp>
      </div>
    <button onClick={increment}>+</button>

    <sanp className='result'></sanp>
    <button onClick={decrement}>-</button>
    <div className='Reset'>

    <button onClick={Reset}>

      <sanp>Reset</sanp>

      </button>

    </div>
    </div>
  );

}
export default Counter;