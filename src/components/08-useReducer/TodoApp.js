import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: "Aprender react",
    done: false
}];

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);

    console.log(todos);
    
    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>mundo</li>
                <li>sierra</li>
            </ul>
        </div>
    );
};