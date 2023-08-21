import { Navigate } from 'react-router-dom';
import { useUser } from 'hooks/useUser';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin, isCurrentUser } = useUser();
  const shouldRedirect = !isLogin && !isCurrentUser;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  Component: PropTypes.array,
  redirectTo: PropTypes.string,
};
