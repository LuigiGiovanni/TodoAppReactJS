import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {

        localStorage.setItem('todo', JSON.stringify( todos ));

    }, [todos]);

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })

    }

    const toogleTodo = (idTodo) => {

        dispatch({
            type: 'toogle',
            payload: idTodo
        })
    }

    const handleDelete = (idTodo) => {

        dispatch({
            type: 'delete',
            payload: idTodo
        })
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className='row'>
                <div className='col-6'>
                   {
                       (todos.length != 0)
                        ? <TodoList todos={ todos } toogleTodo={ toogleTodo } handleDelete={ handleDelete } />
                        : <h4 className='text-muted'>Lista vacía</h4>
                   }
                    
                                
                </div>
                <div className='col-6'>

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>
            </div>

        </div>
    )
}
