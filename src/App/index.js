import React from 'react'
import { useTodos } from './useTodos'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch  } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { TodoError } from '../TodoError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoLoading } from '../TodoLoading'
import { TodoHeader } from '../TodoHeader';
import { ChangeAlert } from '../ChangeAlert'


function App() {
  const { states, stateUpdaters } = useTodos();

  const {
    error, 
    loading, 
    searchedTodos, 
    totalTodos, 
    completeTodo, 
    completedTodos,
    openModal,
    searchValue,
  } = states;

  const {
    deleteTodo,
    setOpenModal,
    setSearchValue,
    addTodo,
    sincronizeTodos
  } = stateUpdaters;

  return(
    <React.Fragment>
        <TodoHeader loading = {loading}>
            <TodoCounter
                totalTodos = {totalTodos}
                completedTodos = {completedTodos}
            />
            <TodoSearch
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
            />
        </TodoHeader>    

        <TodoList
          error = {error}
          loading = {loading}
          searchedTodos = {searchedTodos}
          totalTodos = {totalTodos}
          searchText = {searchValue}
          onError = {() => <TodoError/>}
          onLoading = {() => <TodoLoading/>}
          onEmptyTodos = {() => <EmptyTodos/>}
          onEmptySearchResults = {
            (searchText) => <p>No hay resultados para {searchText}</p>
          }
        >
          {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>
          
        
        {openModal && (
            <Modal>
                <TodoForm 
                  addTodo={addTodo}
                  setOpenModal = {setOpenModal}
                />
            </Modal>
        )}

        <CreateTodoButton 
          openModal= { openModal }
          setOpenModal = {setOpenModal}
        />

        <ChangeAlert 
          sincronize = {sincronizeTodos}
        />
    </React.Fragment>
);
}

export default App;
