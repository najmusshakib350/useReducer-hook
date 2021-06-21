import React , {useReducer} from 'react';

const initstate={
    num:0
};

const reducer=(state, action)=>{
   switch(action.type){
       case 'Increase':
           return {...state,num: state.num+1};
        case 'Decrease':
            return {...state,num: state.num-1};
        default:
            return state;
   }
}

const ComponentA=()=>{
    const [count, dispatch]=useReducer(reducer, initstate);

    return(
        <div>
           <p>Count-{count.num}</p>
           <button type="button" onClick={()=> dispatch({type:'Increase'}) }>Increase</button>
           <button type="button" onClick={()=> dispatch({type:'Decrease'})}>Decrease</button>
        </div>
    )
}
export default ComponentA;