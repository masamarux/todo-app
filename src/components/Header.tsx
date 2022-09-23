import styles from './Header.module.scss';
import logoImg from '../assets/logoImg.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="A rocket launching" />
      to<span>do</span>
    </header>
  )
}