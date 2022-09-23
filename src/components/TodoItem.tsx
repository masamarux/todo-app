import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import {Trash, Check} from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { changeCheckedState, removeTodo } from '../redux/slices/todosSlice';
import { DeleteTodoModal } from './DeleteTodoModal';

import styles from './TodoItem.module.scss';

interface TodoItemProps {
  id: string;
  text: string;
  checked: boolean;
}

export function TodoItem({id, text, checked}: TodoItemProps) {
  const dispatch = useDispatch()

  function handleCheck() {
    dispatch(
      changeCheckedState(id)
    )
  }

  function handleDelete() {
    dispatch(
      removeTodo(id)
    )
  }
  
  return (
    <div className={styles.todo}>
      <div>
        <Checkbox.Root
          className={clsx(styles.checkboxRoot,
            {[styles.checkboxRootChecked]: checked},
            {[styles.checkboxRootUnchecked]: !checked}
          )}
          checked={checked}
          onCheckedChange={handleCheck}
        >
          <Checkbox.Indicator className={styles.checkboxIndicator}>
            <Check />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <span className={clsx(
        {[styles.dashedText]: checked}
      )}>{text}</span>
      <Dialog.Root>
        <Dialog.Trigger className={styles.trashIcon}>
          <Trash />
        </Dialog.Trigger>
        <DeleteTodoModal onClose={handleDelete} />
      </Dialog.Root>
    </div>
  )
}