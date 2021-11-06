import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({ description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 3) return alert('Se necesitan más de 3 caracteres'); 

        const newTodo = {
            id: new Date().getTime(), 
            desc: description,
            done: false, 
        };

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={ handleSubmit }>

                <input
                    onChange={ handleInputChange }
                    name='description'
                    value={ description }
                    autoComplete='off'
                    className='form-control'
                    type='text'
                    placeholder='Nuevas tarea...'
                />

                <div className='d-grid gap-*'>
                <button 
                    className='btn btn-outline-primary btn-block mt-2'
                    >
                    Agregar
                </button>
                </div>

            </form>
        </>
    )
}
