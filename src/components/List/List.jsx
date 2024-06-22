import { ListItem } from 'components/ListItem/ListItem';
import css from './List.module.css';
import PropTypes from 'prop-types';

export const List = ({ filterContact, deleteContact }) => {
  const filteredContacts = filterContact();

  return (
    <ul className={css.listUl}>
      {filteredContacts.map(filteredContact => (
        <ListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
