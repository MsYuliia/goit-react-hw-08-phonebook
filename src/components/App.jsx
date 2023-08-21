import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { useUser } from 'hooks/useUser';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { getCurentUser } from 'redux/authUser/authOperators';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isCurrentUser } = useUser();

  useEffect(() => {
    dispatch(getCurentUser());
  }, [dispatch]);

  return isCurrentUser ? (
    <ColorRing
      visible={true}
      width="80"
      height="80"
      colors={['#F69D3C', '#F7B66F', '#FFC88C', '#6FD3F7', '#2B89AB']}
      wrapperClass="colorRing"
      wrapperStyle={{}}
      ariaLabel="color-ring-loading"
    />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
