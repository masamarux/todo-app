import {PlusCircle} from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, reorderTodoById } from '../redux/slices/todosSlice';
import styles from './InputContainer.module.scss';

export function InputContainer() {
  const [todoText, setTodoText] = useState<string>('');
  const dispatch = useDispatch();

  function handleTodoCreation(event: FormEvent) {
    event.preventDefault();

    dispatch(
      addTodo(todoText)
    )

    setTodoText('');
  }

  return (
    <form onSubmit={handleTodoCreation} className={styles.inputContainer}>
      <input 
        value={todoText} 
        placeholder='Adicione uma nova tarefa'
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type='submit' disabled={todoText.length <= 0 ? true : false}>Criar<PlusCircle weight='bold' /></button>
    </form>
  )
}