import { createAction } from '@reduxjs/toolkit';

import * as types from './phonebookTypes';

export const addContact = createAction(types.ADD_CONTACT, contact => ({
  payload: { contact },
}));

export const takeContacts = createAction(types.TAKE_CONTACTS, contacts => ({
  payload: { contacts },
}));

export const deleteContact = createAction(types.DELETE_CONTACT, id => ({
  payload: { id },
}));

export const filterUpdate = createAction(types.FILTER_UPDATE, value => ({
  payload: { value },
}));

// export const addContact = contact => ({
//   type: types.ADD_CONTACT,
//   payload: { contact },
// });

// export const takeContacts = contacts => ({
//   type: types.TAKE_CONTACTS,
//   payload: { contacts },
// });

// export const deleteContact = id => ({
//   type: types.DELETE_CONTACT,
//   payload: { id },
// });

// export const filterUpdate = value => ({
//   type: types.FILTER_UPDATE,
//   payload: { value },
// });
