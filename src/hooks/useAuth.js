import { useSelector } from 'react-redux';
import {
  selectUser,
  getIsLoading,
  selectIsRefreshing,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};