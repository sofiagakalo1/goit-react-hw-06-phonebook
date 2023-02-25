import ContactsList from './ContactsList';
import ContactsFilter from './ContactsFilter';
import ContactsForm from './ContactsForm';

import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <>
      <div className={css.block}>
        <div className={css.wrapper}>
          <h2 className={css.h2}>Phonebook</h2>
          <ContactsForm />
        </div>
        <div className={css.wrapper}>
          <h3 className={css.h3}>Contacts</h3>
          <ContactsFilter />
          <ContactsList />
        </div>
      </div>
    </>
  );
};

export default Contacts;
