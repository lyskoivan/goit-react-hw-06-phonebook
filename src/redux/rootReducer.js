import { combineReducers } from 'redux';

import phonebookReducer from './phonebook/phonebookReducers';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

export default rootReducer;
