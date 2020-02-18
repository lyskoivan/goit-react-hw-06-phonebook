import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// import * as types from './phonebookTypes';
import * as Actions from './phonebookActions';

const contactsReducer = createReducer([], {
  [Actions.addContact]: (state, action) => [action.payload.contact, ...state],
  [Actions.takeContacts]: (state, action) => action.payload.contacts,
  [Actions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

const filterReducer = createReducer('', {
  [Actions.filterUpdate]: (state, action) => action.payload.value,
});

/* Without redux toolkit */

// const contactsReducer = (state = [], action) => {
//   switch (action.type) {
//     case types.ADD_CONTACT:
//       return [action.payload.contact, ...state];

//     case types.TAKE_CONTACTS:
//       return action.payload.contacts;

//     case types.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case types.FILTER_UPDATE:
//       return action.payload.value;

//     default:
//       return state;
//   }
// };

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default reducer;
