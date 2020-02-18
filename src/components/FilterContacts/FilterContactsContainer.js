import { connect } from 'react-redux';

import * as actions from '../../redux/phonebook/phonebookActions';
import * as selectors from '../../redux/phonebook/phonebookSelectors';

import FilterContacts from './FilterContacts';

const mapStateToProps = store => ({
  filter: selectors.getFilter(store),
});

const mapDispatchToProps = dispatch => ({
  onFilter: data => dispatch(actions.filterUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
