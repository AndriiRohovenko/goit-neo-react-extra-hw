import styles from './UserInfo.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/slice';
import { logOutActionThunk } from '../../redux/auth/operations';

function UserInfo() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutActionThunk());
  };
  return (
    <>
      <div className={styles.userInfoWrapper}>
        <p>Welcome, {user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default UserInfo;
