import styles from './LoginPage.module.css';

import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { loginActionThunk } from '../../redux/auth/operations';
import { selectIsAuthError, resetError } from '../../redux/auth/slice';
import { useEffect } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuthError = useSelector(selectIsAuthError);
  const defaultObj = { email: '', password: '' };
  const emailFieldId = useId();
  const passwordFieldId = useId();

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .min(3, 'Email must be at least 3 characters')
      .max(50, 'Email must not exceed 50 characters')
      .required('Email is required'),

    password: Yup.string().required('Password is required'),
  });

  const handleLogin = user => {
    dispatch(loginActionThunk(user));
    // resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={defaultObj}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <Form className={styles.formWrapper}>
          <div className={styles.fieldWrapper}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field name="email" />
            <ErrorMessage
              className={styles.error}
              name="email"
              component="span"
            />
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field name="password" />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="span"
            />
          </div>
          {isAuthError && (
            <div className={styles.error}>
              Login error, please try with valid email and password.
            </div>
          )}
          <button className={styles.LoginBtn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
