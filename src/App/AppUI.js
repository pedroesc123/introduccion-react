import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch  } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { TodoError } from '../TodoError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoLoading } from '../TodoLoading'

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
                {error && <TodoError error = {error}/>}
                {loading && <TodoLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                    ))}
            </TodoList>
            
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };