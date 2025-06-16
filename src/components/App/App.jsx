import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import { fetchContactsThunk } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import Header from '../Header/Header';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <>
      <div className={styles.appContent}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
