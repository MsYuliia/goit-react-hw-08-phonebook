import { useSelector } from 'react-redux';
import {
  selectUser,
  selectLogin,
  selectPending,
  selectIsCurrentUser,
} from 'redux/authUser/authSelectors';

export const useUser = () => {
  const isLogin = useSelector(selectLogin);
  const isPending = useSelector(selectPending);
  const user = useSelector(selectUser);
  const isCurrentUser = useSelector(selectIsCurrentUser);

  return {
    isLogin,
    isPending,
    user,
    isCurrentUser,
  };
};
