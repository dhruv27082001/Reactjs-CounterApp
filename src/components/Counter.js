import React, { useState,useEffect } from 'react'
import './couter.css'

const Counter = () => {

  const [count, setCount] = useState(0)

  const incNum = () => {
    setCount(count + 1);
  };

  const decNum = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      alert('Zero Limit Reached...');
      setCount(0);
    }
  };

  const resNum = () => {
    if (count > 0) {
      setCount(0);
    }
    else {
      alert('Zero Limit Already Reached...');
      setCount(0);
    }
  };
  
  useEffect(()=>{
    console.log(count)
    })

  return (
    <>
      <div className="main">
        <div className="center">
          <h1> {count} </h1>
          <div className="btn">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
            {count >= 10 && <> <br/><button onClick={resNum}>GO BACK TO 0</button></>}

          </div>
        </div>
      </div>
    </>
  )
}

export default Counter;
