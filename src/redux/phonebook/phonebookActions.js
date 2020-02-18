import * as types from './phonebookTypes';

export const addContact = contact => ({
  type: types.ADD_CONTACT,
  payload: { contact },
});

export const takeContacts = contacts => ({
  type: types.TAKE_CONTACTS,
  payload: { contacts },
});

export const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: { id },
});

export const filterUpdate = value => ({
  type: types.FILTER_UPDATE,
  payload: { value },
});
