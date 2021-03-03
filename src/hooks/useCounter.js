import { useState } from 'react';

export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);

    const increment = (step = 1) => {
        setState(state + step);
    };

    const decrement = (step = 1) => {
        setState(state - step);
    };

    const reset = () => {
        setState(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    };
};