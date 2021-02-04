import React, { useRef } from 'react';
import FilterButtons from './FilterButtons';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import initialTodos from '../older-ways/common/initial-todos';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices/reducer';
import logger from 'redux-logger';

//store: Central location to keep state in Redux
//dispatch: single function that schedules the changes: dispatch(action)
//action: object that describes the changes we want to do to the state
//  action.type: describes the type of change
//  action.payload: data for the action
//reducer: method scheduled by the dispatch. Takes two arguments:
//  reducer(currentState, action) : returns the new state.
//reducers have to use the state in an *immutable* way. (not anymore, because of immer)

//actions exemples:
//{type: 'todos/addTodo', payload: 'Buy Milk'}
//{type: 'todos/toggleTodo', payload: 2}
//{type: 'todos/deleteTodo', payload: 3}
//{type: 'todos/editTodo, payload: {id:4, newText: 'Walk the dog'}}

export default function Todos() {
  let store = useRef();

  if (!store.current) {
    store.current = configureStore({
      reducer: rootReducer,
      middleware: [logger],
      preloadedState: { todos: initialTodos },
    });
  }

  return (
    <Provider store={store.current}>
      <h1>Todos (using Redux Toolkit)</h1>
      <AddTodo />
      <FilterButtons />
      <TodoList />
    </Provider>
  );
}
