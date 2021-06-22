import React,{useReducer, useState} from 'react';
import ComponentA from './components/ComponentA';
import * as Reducer from './lib/Reducer';
import Context from './lib/Context';

const App=()=>{
  const [count, dispatch]=useReducer(Reducer.reducer, Reducer.initialState);
  return(
    <div>
       <h1>I am App Component</h1>
       <Context.Provider value={{state:count, action:dispatch}}>
           <ComponentA />
       </Context.Provider>
    </div>
  )
}
export default App;