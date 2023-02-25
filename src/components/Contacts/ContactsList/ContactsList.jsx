import ContactsListItem from './ContactsListItem';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';

import css from './contactsList.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const allContacts = filteredContacts.map(({ id, name, number }) => (
    <ContactsListItem key={id} id={id} name={name} number={number} />
  ));
  return <ul className={css.ul}>{allContacts}</ul>;
};

export default ContactsList;
