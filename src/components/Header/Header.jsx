import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navigationWrapper}>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <div className={styles.rightNavigationWrapper}>
            <NavLink
              to={'/register'}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              SignUp
            </NavLink>
            <NavLink
              to={'/login'}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Log In
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
