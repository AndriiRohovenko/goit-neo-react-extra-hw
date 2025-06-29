import styles from './UserInfo.module.css';

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSlice';

function UserInfo() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className={styles.userInfoWrapper}>
        <p>Welcome, {user.email}</p>
        <button>Logout</button>
      </div>
    </>
  );
}

export default UserInfo;
