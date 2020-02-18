import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterContacts.module.css';

const FilterContacts = ({ filter, onFilter }) => (
  <input
    type="text"
    value={filter}
    onChange={e => onFilter(e.target.value)}
    placeholder="Filter..."
    className={styles.contacts__filter}
  />
);

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default FilterContacts;
