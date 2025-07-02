import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/auth/authSlice';
import UserInfo from '../UserInfo/UserInfo';
import Authorization from '../Authorization/Authorization';

function Header() {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navigationWrapper}>
          <div className={styles.leftNavigationWrapper}>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink
                to={'/contacts'}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                Contacts
              </NavLink>
            )}
          </div>
          <div className={styles.rightNavigationWrapper}>
            {isLoggedIn ? <UserInfo /> : <Authorization />}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
