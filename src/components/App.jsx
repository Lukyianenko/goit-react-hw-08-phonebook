import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux/es/exports";
import PropTypes from 'prop-types';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
    // return (
    //   <div>
    //   <AppBar />
    //     <Title>Phonebook</Title>
    //   <AddContscts />
    //   <Filter/>
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <ListContacts/>
    //   </div>
    // );  
};


App.propTypes = {
  state: PropTypes.arrayOf(PropTypes.exact({
    contacts: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })),
  })),
}