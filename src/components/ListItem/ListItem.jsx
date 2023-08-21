import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { deleteContact } from 'redux/contacts/contactsOperators';
import { string } from 'prop-types';
import css from './ListItem.module.css';

const ListItem = ({ id, name, number }) => {
  const [isLoading, setIsLoading] = useState({ [id]: false });
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    setIsLoading(prevState => ({
      ...prevState,
      [id]: true,
    }));

    dispatch(deleteContact(id))
      .then(() => {
        setIsLoading(prevState => ({
          ...prevState,
          [id]: false,
        }));
      })
      .catch(() => {
        setIsLoading(prevState => ({
          ...prevState,
          [id]: false,
        }));
      });
    };
    
  return (
    <div className={css.contactItem}>
      <li className={css.contactText}>
        {name}: {number}
      </li>
      <DeleteBtn
        id={id}
        isLoading={isLoading[id]}
        onDelete={handleDeleteContact}
      />
    </div>
  );
};

export { ListItem };

ListItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  number: string.isRequired,
};
