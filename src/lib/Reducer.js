export const initialState={
    num:0
}

export const reducer=(state, action)=>{
    switch(action.type){
        case "Increment":
            return {...state, num: state.num +1};
        case "Decrement":
            return {...state, num: state.num -1};
        default:
            return state;

    }
}

