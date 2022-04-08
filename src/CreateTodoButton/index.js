import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton({openModal, setOpenModal}) {

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