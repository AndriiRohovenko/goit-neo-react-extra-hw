import styles from './RegistrationPage.module.css';

import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { signUpActionThunk } from '../../redux/auth/authOps';
import { selectIsAuthError, resetError } from '../../redux/auth/authSlice';
import { useEffect } from 'react';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const isAuthError = useSelector(selectIsAuthError);
  const defaultObj = { name: '', email: '', password: '' };
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must not exceed 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .min(3, 'Email must be at least 3 characters')
      .max(50, 'Email must not exceed 50 characters')
      .required('Email is required'),

    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(50, 'Password must not exceed 50 characters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character'
      ) // Optional for strong password
      .required('Password is required'),
  });

  const handleRegistration = (user, { resetForm }) => {
    dispatch(signUpActionThunk(user));
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={defaultObj}
        onSubmit={handleRegistration}
        validationSchema={validationSchema}
      >
        <Form className={styles.formWrapper}>
          <div className={styles.fieldWrapper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </div>
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
              Sign Up error, please try with another email and password.
            </div>
          )}
          <button className={styles.SignUpBtn} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
