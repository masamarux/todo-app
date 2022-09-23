import { useSelector } from 'react-redux'
import {ArrowCircleDown, ArrowCircleUp} from 'phosphor-react'
import { TodoItem } from './TodoItem';
import { useDispatch } from 'react-redux';
import { reorderTodoById } from '../redux/slices/todosSlice';

import styles from './TodoList.module.scss'
import clipboardIcon from '../assets/clipboardIcon.svg'

import { RootState } from '../redux/store';

export function TodoList() {
  const {todos, isReversed} = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className={styles.todoListContainer}>
      <header>
        <strong className={styles.todosCount}>
          <button className={styles.arrowButton}
            onClick={() => dispatch(reorderTodoById())}
          >
            {
              isReversed ? <ArrowCircleDown /> : <ArrowCircleUp />
            }
          </button>
          Tarefas criadas <span className={styles.badge}>{todos.length}</span>
          </strong>
        <strong className={styles.todosCompleted}>Concluídas <span className={styles.badge}>
          {
            todos.length <= 0 ? (
              todos.length
            ) : (
              <>
                {todos.filter(todo => todo.checked === true).length}
                {' '}de{' '}
                {todos.length}
              </>
            )
          }
          </span></strong>
      </header>
      
        {
          todos.length <= 0 ? (
            <div className={styles.emptyTodos}>
              <img src={clipboardIcon} alt="A written clipboard icon" />
              <span>Você ainda não tem tarefas cadastradas</span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          ) : (
            
              <div className={styles.todoListContent}>
                {
                  todos.map((todoItem) => (
                    <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} checked={todoItem.checked}/>
                  ))
                }
              </div>
            
          )
        }
      
    </div>
  )
}