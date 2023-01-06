import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { Contact } from '../Contact/Contact';
import { Container } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
	 const filter = useSelector(getFilter);
	const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      {filteredContacts.map(({ name, phone, id }) => (
        <li key={id}>
          <Contact name={name} number={phone} id={id} />
        </li>
      ))}
    </Container>
  );
};
