const initialState = {
    counter: 2
}

const countReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'INCREMENT':
            return {counter: state.counter + action.value};
        case 'DECREMENT':
            return {counter: state.counter - action.value};
        default: 
            return state     
    }

}
export default countReducer;