import { connect } from 'react-redux';

import App from './App';

import * as selectors from '../../redux/phonebook/phonebookSelectors';
import * as actions from '../../redux/phonebook/phonebookActions';

const mapStateToProps = store => ({
  contacts: selectors.getContacts(store),
});

const mapDispatchToPropst = dispatch => ({
  saveContacts: data => dispatch(actions.takeContacts(data)),
});

export default connect(mapStateToProps, mapDispatchToPropst)(App);
