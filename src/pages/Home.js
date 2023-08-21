import { useUser } from 'hooks/useUser';
import { Link } from 'react-router-dom';
import css from 'components/App.module.css';

const Home = () => {
  const { isLogin } = useUser();

  return (
    <div className={css.homeContainer}>
      {isLogin ? (
        <div>
          <h2 className={css.homeTitle}>Welcome back to your Phonebook!</h2>
          <ul>
            <li className={css.homeItemContacts}>
              <div className={css.centerContent}>
                <span className={css.homeItem}>
                  Click{' '}
                  <Link className={css.homeLink} to="/contacts">
                    Contacts
                  </Link>{' '}
                  to view your saved contactsor or let's to create new
                </span>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <h2 className={css.homeTitle}>
            With this application all your contacts always will be with you
          </h2>
          <ul className={css.homeList}>
            <li className={css.homeListItem}>
              <div className={css.centerContent}>
                <span className={css.homeItem}>
                  Click{' '}
                  <Link className={css.homeLink} to="/register">
                    Register
                  </Link>{' '}
                  to create an account
                </span>
              </div>
            </li>
            <li className={css.homeListItem}>
              <div className={css.centerContent}>
                <span className={css.homeItem}>
                  or{' '}
                  <Link className={css.homeLink} to="/login">
                    Login
                  </Link>{' '}
                  if you already have account
                </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
