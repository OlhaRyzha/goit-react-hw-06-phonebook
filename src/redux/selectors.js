import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contactsData.contacts;
export const getFilter = state => state.filterData.value;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
