const initialState = {
    counter: 0
}

const countReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'INCREMENT':
            return {counter: state.counter + action.payload};
        case 'DECREMENT':
            return {counter: state.counter > 0 ? state.counter - 1 : state.counter};
        default: 
            return state     
    }

}
export default countReducer;