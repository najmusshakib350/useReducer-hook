import React , {useReducer} from 'react';

const initstate=0;

const reducer=(state, action)=>{
   switch(action){
       case 'Increase':
           return state+1;
        case 'Decrease':
            return state-1;
        default:
            return state;
   }
}

const ComponentA=()=>{
    const [count, dispatch]=useReducer(reducer, initstate);

    return(
        <div>
           <p>Count-{count}</p>
           <button type="button" onClick={()=> dispatch('Increase') }>Increase</button>
           <button type="button" onClick={()=> dispatch('Decrease')}>Decrease</button>
        </div>
    )
}
export default ComponentA;