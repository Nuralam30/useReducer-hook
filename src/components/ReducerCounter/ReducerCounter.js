import React, { useReducer } from 'react';
import './ReducerCounter.css';

function init(initialCount) {
    return {count: initialCount};
  }

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return{count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

const ReducerCounter = ({initialCount}) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);

    return (
        <div>
            <h2> Count : {state.count}</h2>
            <br />
            <button
                onClick={() => dispatch({type: 'reset', payload: 0})}>
                Reset
            </button>
            <button onClick={ () => dispatch({type: 'decrement'})}>-</button>
            <button onClick={ () => dispatch({type: 'increment'})}>+</button>
        </div>
    );
};

export default ReducerCounter;