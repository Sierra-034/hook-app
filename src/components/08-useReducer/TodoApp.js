import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log("init", savedTodos);
    return savedTodos;
};

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        console.log("todos changed to:", todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAdd = (newTodo) => {
        dispatch({
            type: "add",
            payload: newTodo
        });
    };

    const handleDelete = (todoId) => {
        dispatch({
            type: "delete",
            payload: todoId
        });
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: "toggle",
            payload: todoId
        });
    };
    
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAdd={handleAdd} />
                </div>
            </div>

        </div>
    );
};