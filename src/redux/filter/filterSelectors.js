import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/contactsSelectors';

export const selectFilterValue = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    if (filterValue === '') {
      return contacts;
    } else {
      const normalizeFilter = filterValue.toLowerCase();
      const filterContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      );

      return filterContact;
    }
  }
);
