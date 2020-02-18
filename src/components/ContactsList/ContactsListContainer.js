import { connect } from 'react-redux';

import * as selectors from '../../redux/phonebook/phonebookSelectors';
import * as actions from '../../redux/phonebook/phonebookActions';
import ContactsList from './ContactsList';

const mapStateToProps = store => ({
  contacts: selectors.getFiltredContacts(store),
});

const mapDispatchToProps = dispatch => ({
  handleDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
