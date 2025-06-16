import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import { fetchContactsThunk } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import HomePage from '../../pages/Homepage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <>
      <div className={styles.appContent}>
        <h1>Phonebook</h1>
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
