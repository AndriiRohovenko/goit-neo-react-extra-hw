import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navigationWrapper}>
          <h1>Phonebook</h1>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to={'/contacts'}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Contacts
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
