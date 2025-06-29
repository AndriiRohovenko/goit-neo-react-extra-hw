import styles from './Authorization.module.css';
import { NavLink } from 'react-router-dom';

function Authorization() {
  return (
    <>
      <div className={styles.authorizationWrapper}>
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
    </>
  );
}

export default Authorization;
