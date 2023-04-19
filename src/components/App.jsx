import { useEffect } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux/es/exports";
import PropTypes from 'prop-types';
import { fetchContacts } from "../redux/fetchContacts";
import { getIsLoading, getError } from "../redux/selectors";
import {AddContscts} from './BookContacts/AddContact';
import { ListContacts } from './BookContacts/ListContacts';
import { Filter } from './BookContacts/FilterContacts';
import { Title } from './BookContacts/BookContacts.styled';
import { AppBar } from "./AppBar/AppBar";

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <div>
      <AppBar />
        <Title>Phonebook</Title>
      <AddContscts />
      <Filter/>
      {isLoading && !error && <b>Request in progress...</b>}
      <ListContacts/>
      </div>
    );  
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