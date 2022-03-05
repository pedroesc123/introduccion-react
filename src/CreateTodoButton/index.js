import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'

function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext)

    return(
        <button 
            className='CreateTodoButton'
            onClick={() => {
                !openModal?
                setOpenModal(true):
                setOpenModal(false)
            }}
        >+</button>
    );
}

export {CreateTodoButton}