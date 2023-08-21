import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem } from 'components/ListItem/ListItem';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contactsSelectors';
import { selectVisibleContacts } from 'redux/filter/filterSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperators';
import { ColorRing } from 'react-loader-spinner';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {isLoading && (
        <>
          <ColorRing
            visible={true}
            width="80"
            height="80"
            colors={['#F69D3C', '#F7B66F', '#FFC88C', '#6FD3F7', '#2B89AB']}
            wrapperClass="colorRing"
            wrapperStyle={{}}
            ariaLabel="color-ring-loading"
          />{' '}
        </>
      )}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <ul className={css.contactList}>
          {visibleContacts.map(item => (
            <ListItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
