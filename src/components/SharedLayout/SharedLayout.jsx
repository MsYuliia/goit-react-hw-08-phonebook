import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import { useUser } from 'hooks/useUser';
import UserMenu from '../UserMenu/UserMenu';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const { isLogin } = useUser();

  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <Navigation />
          {isLogin ? (
            <UserMenu />
          ) : (
            <div className={css.headerNavWrap}>
              <NavLink className={css.headerRegister} to="/register">
                Register
              </NavLink>
              <NavLink className={css.headerLogin} to="/login">
                Login
              </NavLink>
            </div>
          )}
        </nav>
      </header>

      <Suspense
        fallback={
          <ColorRing
            visible={true}
            width="80"
            height="80"
            colors={['#F69D3C', '#F7B66F', '#FFC88C', '#6FD3F7', '#2B89AB']}
            wrapperClass="colorRing"
            wrapperStyle={{}}
            ariaLabel="color-ring-loading"
          />
        }
      >
        <main>
          <Toaster
            containerStyle={{ marginTop: '35px' }}
            toastOptions={{ duration: 3000 }}
          />
          <div>
            <Outlet />
          </div>
        </main>
        <Footer />
      </Suspense>
    </>
  );
};
