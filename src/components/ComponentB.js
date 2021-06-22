import React,{useContext} from 'react';
import ComponentC from './ComponentC';
import context from '../lib/Context';

const ComponentB=()=>{
    const numContext =useContext(context);
    React.useEffect(()=>{
      console.log("I am useEffect function");
      console.log(numContext);   
    });
  return (
      <div>
          <ComponentC state={numContext.state} action={numContext.action}/>
      </div>
  )
}

export default ComponentB;