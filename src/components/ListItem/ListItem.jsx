import css from './ListItem.module.css';
import PropTypes from 'prop-types';

export const ListItem = ({ filteredContact, deleteContact }) => {
  // handleDelete method
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <li className={css.listItem}>
      <p className={css.contactName}>{filteredContact.name}:</p>
      <p>{filteredContact.number}</p>
      <button className={css.delBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
