import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber, loadUsers } from '../redux/actions/countActions';

const Counter = () => {
    const { counter, discoveryList } = useSelector((state) => {
        return state.countReducer;
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [dispatch]);
    
    console.log(discoveryList);

    return (
        <div className="m-4">
           {
               discoveryList?.map((discovery) => {
                return (
                 <div key={discovery.id} className="p-2">
                    <div>count - {counter}</div>
                    <button type="button" onClick={() => dispatch(incNumber(discovery))}>Increment</button>
                    <button type="button" onClick={() => dispatch(decNumber(discovery.id))}>Decrement</button>
                 </div>
                )
            })
           }
        </div>
    );
};

export default Counter;