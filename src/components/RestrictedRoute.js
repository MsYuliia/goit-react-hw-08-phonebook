import { useUser } from 'hooks/useUser';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin } = useUser();

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  Component: PropTypes.array,
  redirectTo: PropTypes.string,
};
