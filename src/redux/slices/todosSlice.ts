import {v4 as uuid} from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

interface ITodos {
  id: string;
  checked: boolean;
  text: string;
}

export interface TodosState {
  todos: ITodos[];
  isReversed: boolean;
}

const initialState: TodosState = {
  todos: [],
  isReversed: false
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

      if(state.isReversed) {
        state.todos.push(todo)
      } else {
        state.todos.unshift(todo)
      }
    },
    changeCheckedState: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)

      state.todos[index].checked = !state.todos[index].checked

      if(!state.todos[index].checked) return
        const todos = state.todos

        const [completedTodo] = todos.splice(index, 1)

        const uncheckedTodos = todos.filter(todo => !todo.checked)
        const checkedTodos = todos.filter(todo => todo.checked)

        if(state.isReversed) {
          checkedTodos.push(completedTodo)

          state.todos = [...checkedTodos, ...uncheckedTodos]
        } else {
          checkedTodos.unshift(completedTodo)

          state.todos = [...uncheckedTodos, ...checkedTodos]
        }
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)

      state.todos.splice(index, 1)
    },
    reorderTodoById: (state) => {
      state.todos.reverse();
      state.isReversed = !state.isReversed;
    }
  }
})

export const {addTodo, changeCheckedState, removeTodo, reorderTodoById} = todosSlice.actions;

export default todosSlice.reducer;