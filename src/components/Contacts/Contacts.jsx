import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from '../../redux/filter/filter-slice';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

import ContactsList from './ContactsList';
import ContactsFilter from './ContactsFilter';
import ContactsForm from './ContactsForm';

import css from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }) => {
    if (isAlreadyExists(name)) {
      return alert(`${name} is already in your contactss!`);
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  const isAlreadyExists = searchName => {
    if (
      contacts.find(contact => {
        return contact.name.toLowerCase() === searchName.toLowerCase();
      })
    ) {
      return true;
    }
  };

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  const handleFilter = ({ target }) => {
    const action = setFilter(target.value);
    dispatch(action);
  };

  const acceptedContacts = getFilteredContacts();

  return (
    <>
      <div className={css.block}>
        <div className={css.wrapper}>
          <h2 className={css.h2}>Phonebook</h2>
          <ContactsForm onSubmit={handleAddContact} />
        </div>
        <div className={css.wrapper}>
          <h3 className={css.h3}>Contacts</h3>
          <ContactsFilter onInputChange={handleFilter} filter={filter} />
          <ContactsList
            deleteContact={handleDeleteContact}
            acceptedContacts={acceptedContacts}
          />
        </div>
      </div>
    </>
  );
};

export default Contacts;
