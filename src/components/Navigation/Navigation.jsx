import { useUser } from 'hooks/useUser';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLogin } = useUser();

  return (
    <>
      <NavLink className={css.headerHome} to="/">
        Home
      </NavLink>
      {isLogin && (
        <NavLink className={css.headerContacts} to="/contacts">
          Contacts
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
