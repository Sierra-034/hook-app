import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';

const init = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log("init", savedTodos);
    return savedTodos;
};

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [{description}, handleInputChange, reset] = useForm({description: ''});

    useEffect(() => {
        console.log("todos changed to:", todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: "add",
            payload: newTodo
        };

        dispatch(action);
        reset();
    };
    
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                                todos.map((todo, index) => (
                                    <li
                                        key={todo.id}
                                        className="list-group-item"
                                    >   
                                        <p className="text-center">{index + 1}. {todo.desc}</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODOS</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};