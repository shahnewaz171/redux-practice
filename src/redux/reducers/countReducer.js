const initialState = {
    discoveryList: [],
    selectedList: [],
    counter: 0
}

const countReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'LOAD_USERS': {
            const newState = {
                ...state,
                discoveryList: action.payload
            }
            return newState;
        }
        case 'INCREMENT': {
            let usersId = [];
            state.selectedList.length ? state.selectedList.forEach(item => {
                usersId.push(item.id);
            }) 
            : ""
            const newState = {
                ...state,
                selectedList: [ ...state.selectedList, action.payload]
            }
            return !usersId.includes(action.payload.id) ? newState : state;
        }
        case 'DECREMENT': {
            const newState = {
                ...state,
                counter: state.counter > 0 ? state.counter - 1 : state.counter
            }
            return newState;
        }
        default: 
            return state     
    }

}
export default countReducer;