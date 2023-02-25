import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../../redux/contacts/contacts-slice';

import PropTypes from 'prop-types';
import css from './contactsListItem.module.css';

const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <li className={css.li}>
      <p className={css.p}>
        {name}: {number}
      </p>
      <button
        onClick={() => handleDeleteContact(id)}
        type="button"
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
