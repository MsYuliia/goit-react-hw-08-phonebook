import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import {
  selectErrorStatusRegister,
  selectPending,
} from 'redux/authUser/authSelectors';
import { createUser } from 'redux/authUser/authOperators';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(selectErrorStatusRegister);
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
      case 'name':
        setName(value.trim());
        break;
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
    dispatch(createUser({ name, email, password }));
    resetForm();
  };
  const resetForm = () => {
    setName('');
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
          colors={['#690026', '#751919', '#803946', '#803960', '#734166']}
          wrapperClass="colorRing"
          wrapperStyle={{}}
          ariaLabel="color-ring-loading"
        />
      ) : (
        <form className={css.registerForm} onSubmit={hundleSubmit}>
          <h2 className={css.registerTitle}>
            Enter data to create an account:
          </h2>
          <div className={css.registerFormContainer}>
            <label className={css.registerLabel}>
              Name:
              <input
                className={css.registerInput}
                type="text"
                name="name"
                required
                value={name}
                onChange={handleValue}
              />
            </label>
            <label className={css.registerLabel}>
              Email:
              <input
                className={css.registerInput}
                type="email"
                name="email"
                pattern=".+@.+"
                title="Please enter a valid email address"
                value={email}
                required
                onChange={handleValue}
              />
            </label>
            <label className={css.registerLabel}>
              Password:
              <input
                className={css.registerInput}
                type="password"
                name="password"
                value={password}
                pattern="^.{7,12}$"
                title="The password must contain 7-12 characters"
                required
                onChange={handleValue}
              />
            </label>
          </div>
          <button className={css.registerButton} type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default RegisterForm;
