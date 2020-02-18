import { createSelector } from 'reselect';

export const getContacts = store => store.phonebook.contacts;

export const getFilter = store => store.phonebook.filter;

export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filtred) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtred.toLowerCase()),
    ),
);
