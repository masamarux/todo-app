import {v4 as uuid} from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

interface ITodos {
  id: string;
  checked: boolean;
  text: string;
}

export interface TodosState {
  todos: ITodos[];
}

const initialState: TodosState = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
        checked: false
      }

      state.todos.unshift(todo)
    },
    changeCheckedState: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)

      state.todos[index].checked = !state.todos[index].checked

      if(!state.todos[index].checked) return

      const todos = state.todos

      const [completedTodo, ...rest] = todos.splice(index, 1)

      const uncheckedTodos = todos.filter(todo => !todo.checked)
      const checkedTodos = todos.filter(todo => todo.checked)

      checkedTodos.unshift(completedTodo)
      
      state.todos = [...uncheckedTodos, ...checkedTodos]
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)

      state.todos.splice(index, 1)
    },
  },
})

export const {addTodo, changeCheckedState, removeTodo} = todosSlice.actions;

export default todosSlice.reducer;