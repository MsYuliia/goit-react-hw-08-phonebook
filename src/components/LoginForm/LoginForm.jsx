import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { logInUser } from 'redux/authUser/authOperators';
import {
  selectErrorStatusLogin,
  selectPending,
} from 'redux/authUser/authSelectors';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(selectErrorStatusLogin);
  const pending = useSelector(selectPending);

  useEffect(() => {
    const notifyError = () => toast.error(`${error}`);
    if (error !== null) {
      notifyError();
    }
  }, [error]);

  const handleValue = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value.trim());
        break;
      case 'password':
        setPassword(value.trim());
        break;
      default:
        return;
    }
  };

  const hundleSubmit = evt => {
    evt.preventDefault();
    dispatch(logInUser({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {pending ? (
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
        <form className={css.loginForm} onSubmit={hundleSubmit}>
          <h2 className={css.loginTitle}>Enter data for authorization:</h2>
          <div className={css.loginFormContainer}>
            <label className={css.loginLable}>
              Email:
              <input
                className={css.loginInput}
                type="email"
                name="email"
                pattern=".+@.+"
                title="Please enter a valid email address"
                required
                value={email}
                onChange={handleValue}
              />
            </label>
            <label className={css.loginLable}>
              Password:
              <input
                className={css.loginInput}
                type="password"
                name="password"
                required
                pattern="^.{7,12}$"
                title="The password must contain 7-12 characters"
                value={password}
                onChange={handleValue}
              />
            </label>
          </div>
          <button className={css.loginButton} type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
