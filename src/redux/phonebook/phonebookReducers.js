import { combineReducers } from 'redux';

import * as types from './phonebookTypes';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_CONTACT:
      return [action.payload.contact, ...state];

    case types.TAKE_CONTACTS:
      return action.payload.contacts;

    case types.DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case types.FILTER_UPDATE:
      return action.payload.value;

    default:
      return state;
  }
};

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default reducer;
