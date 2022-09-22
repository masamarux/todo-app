import {PlusCircle, Clipboard, Trash, Check} from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';

import styles from './App.module.scss';
import './global.scss';

import clipboardIcon from './assets/clipboardIcon.svg'
import logoImg from './assets/logoImg.svg';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logoImg} alt="A rocket launching" />
        to<span>do</span>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.inputContainer}>
          <input placeholder='Adicione uma nova tarefa' />
          <button>Criar <PlusCircle weight='bold' /></button>
        </div>

        <div className={styles.todoListContainer}>
          <header>
            <strong className={styles.todosCount}>Tarefas criadas <span className={styles.badge}>0</span></strong>
            <strong className={styles.todosCompleted}>Concluídas <span className={styles.badge}>0</span></strong>
          </header>
          {/* <div className={styles.emptyTodos}>
            <img src={clipboardIcon} alt="A written clipboard icon" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div> */}
          <div className={styles.todoListContent}>
            <div className={styles.todo}>
              <Checkbox.Root className={styles.checkboxRoot}>
                <Checkbox.Indicator className={styles.checkboxIndicator}>
                  <Check />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
              <Trash />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
