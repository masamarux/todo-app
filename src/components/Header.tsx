import styles from './Header.module.scss';
import logoImg from '../assets/logoImg.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <span>
          <img src={logoImg} alt="A rocket launching" />
          to<span className={styles.purpleText}>do</span>
        </span>
        <span className={styles.description}>Sua lista de tarefas</span>
      </h1>
      
    </header>
  )
}