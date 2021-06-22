import React from 'react';

const ComponentC=(props)=>{
  return (
      <div>
          <p>{props.state.num}</p>
          <button onClick={()=> props.action({type:"Increment"})}>Increase</button>
          <button onClick={()=> props.action({type:"Decrement"})}>Decrease</button>
      </div>
  )
}

export default ComponentC;