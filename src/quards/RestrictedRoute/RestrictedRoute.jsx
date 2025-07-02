import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/auth/slice';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/contacts',
}) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
