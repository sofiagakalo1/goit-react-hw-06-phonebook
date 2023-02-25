import css from './contactsFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filter-slice';
import { getFilter } from '../../../redux/filter/filter-selectors';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const updateFilter = ({ target }) => {
    const action = setFilter(target.value);
    dispatch(action);
  };

  return (
    <div className={css.filterBlock}>
      <h4 className={css.h4}>Find contacts by name</h4>
      <input
        name="filter"
        onChange={updateFilter}
        className={css.input}
        placeholder="Type name..."
        type="text"
        value={filter}
      ></input>
    </div>
  );
};

export default ContactsFilter;
