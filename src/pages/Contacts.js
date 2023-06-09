import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ListContacts } from '../components/BookContacts/ListContacts';
import { AddContscts } from '../components/BookContacts/AddContact';
import { Filter } from '../components/BookContacts/FilterContacts';
import { fetchContacts } from '../redux/contacts/operations';
import { getIsLoading } from '../redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        <title>Your tasks</title>
      </Helmet> */}
      <AddContscts />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ListContacts />
    </>
  );
}
