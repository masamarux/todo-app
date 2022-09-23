import {XCircle} from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog'

import styles from './DeleteTodoModal.module.scss'

interface DeleteTodoModalProps {
  onClose: () => void;
}

export function DeleteTodoModal({onClose}: DeleteTodoModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content className={styles.content}>
        <div className={styles.icon}>
          <XCircle />
        </div>
        
        <Dialog.Title className={styles.title}>
          Realmente deseja remover esse item da lista?
        </Dialog.Title>
        <Dialog.Description className={styles.description}>
          Não será possível reverter essa ação!
        </Dialog.Description>
        <footer className={styles.buttonContainer}>
          <Dialog.Close className={styles.closeButton} onClick={onClose}>
            Não, mudei de ideia
          </Dialog.Close>
          <Dialog.Close className={styles.deleteButton} onClick={onClose}>
            Quero remover!
          </Dialog.Close>
        </footer>
        
      </Dialog.Content>
    </Dialog.Portal>
  )
}