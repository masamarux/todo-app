import { useSelector } from 'react-redux'
import * as Dialog from '@radix-ui/react-dialog';

import { TodoItem } from './TodoItem';

import styles from './TodoList.module.scss'
import clipboardIcon from '../assets/clipboardIcon.svg'

import { RootState } from '../redux/store';
import { DeleteTodoModal } from './DeleteTodoModal';

export function TodoList() {
  const {todos} = useSelector((state: RootState) => state.todos)

  return (
    <div className={styles.todoListContainer}>
      <header>
        <strong className={styles.todosCount}>Tarefas criadas <span className={styles.badge}>{todos.length}</span></strong>
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