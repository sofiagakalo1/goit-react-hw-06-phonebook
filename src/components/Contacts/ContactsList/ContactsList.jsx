import ContactsListItem from './ContactsListItem';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import css from './contactsList.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const allContacts = filteredContacts.map(({ id, name, number }) => (
    <ContactsListItem key={id} id={id} name={name} number={number} />
  ));
  return <ul className={css.ul}>{allContacts}</ul>;
};

ContactsList.defaultProps = {
  acceptedContacts: [],
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  acceptedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
