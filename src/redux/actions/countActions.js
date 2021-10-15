import axios from "axios";

export const loadUsers = () => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then(data => {
            dispatch({
                type: 'LOAD_USERS',
                payload: data
            })
        });
    }
}

export const incNumber = (payload) => {
    // return async (dispatch) => {
    //     await axios.get(`https://jsonplaceholder.typicode.com/users`,  payload)
    //     dispatch({
    //         type: 'INCREMENT',
    //         payload
    //     })
    // }
    return {
        type: 'INCREMENT', payload: payload
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
}