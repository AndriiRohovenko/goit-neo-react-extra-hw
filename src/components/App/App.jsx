import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';

import ContactsPage from '../../pages/ContactsPage/ContactsPage';

import { lazy, Suspense, useEffect } from 'react';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfoThunk } from '../../redux/auth/authOps';
import { selectIsRefreshing } from '../../redux/auth/authSlice';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);

import RestrictedRoute from '../../quards/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../../quards/PrivateRoute/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(fetchUserInfoThunk());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <p>Refreshing User</p>
      ) : (
        <div className={styles.appContent}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
