import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
			<Filter />
			{isLoading && !error && <h4>Request in progress...</h4>}
			{error && <h2>ERROR...</h2>}
			{contacts.length <= 0 && !error && !isLoading && <h4>Sorry. Your phonebok is empty.</h4>}
      {contacts.length > 0 && (
        <>
          <ContactsList />
        </>
      )}
			
      <GlobalStyle />
    </>
  );
};
