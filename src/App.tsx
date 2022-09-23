import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { InputContainer } from './components/InputContainer';

import styles from './App.module.scss';
import './global.scss';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputContainer />
        <TodoList />
      </div>
    </div>
  )
}

export default App
