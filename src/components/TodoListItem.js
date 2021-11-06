import React from 'react'

export const TodoListItem = ({ todo, i, toogleTodo, handleDelete }) => {
    return (
        <li className='list-group-item listItem' key={ todo.id } >
            <p
                onClick={ () => toogleTodo(todo.id) }
                className={ `${ (todo.done) && 'complete fst-italic' } fw-bold noselect`}
                >
            { i + 1 }. { todo.desc }
            </p>

            <button
                className='btn btn-danger'
                onClick={ () => handleDelete(todo.id) }
            >
                Borrar
            </button>
        </li>
    )
}
