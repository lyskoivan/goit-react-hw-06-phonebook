import { connect } from 'react-redux';

import * as actions from '../../redux/phonebook/phonebookActions';
import * as selectors from '../../redux/phonebook/phonebookSelectors';

import FormContacts from './FormContacts';

const mapStateToProps = store => ({
  contacts: selectors.getContacts(store),
});

const mapDispatchToProps = dispatch => ({
  addNewContact: data => dispatch(actions.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContacts);
