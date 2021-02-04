import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 4;

const todos = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: nextTodoId++, text: action.payload, completed: false });
    },

    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },

    deleteTodo: (todos, action) => {
      const idx = todos.findIndex((todo) => todo.id === action.payload);
      todos.splice(idx, 1);
    },

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export default todos;

export const { addTodo, editTodo, toggleTodo, deleteTodo } = todos.actions;
