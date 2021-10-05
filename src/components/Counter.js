import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from '../redux/actions/countActions';

const Counter = () => {
    const count = useSelector((state) => {
        return state.countReducer;
    })
    const dispatch = useDispatch();
    console.log(count);
    
    return (
        <div>
            <div>count - {count.counter}</div>
            <button type="button" onClick={() => dispatch(incNumber())}>Increment</button>
            <button type="button" onClick={() => dispatch(decNumber())}>Decrement</button>
        </div>
    );
};

export default Counter;