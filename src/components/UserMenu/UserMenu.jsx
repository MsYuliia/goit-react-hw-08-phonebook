import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/authUser/authOperators';
import { useUser } from 'hooks/useUser';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { user } = useUser();
  const dispatch = useDispatch();

  return (
    <div className={css.menuContainer}>
      <p className={css.menuText}>Hi, {user.name}!</p>
      <button
        className={css.menuButton}
        type="button"
        onClick={() => {
          dispatch(logOutUser());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
