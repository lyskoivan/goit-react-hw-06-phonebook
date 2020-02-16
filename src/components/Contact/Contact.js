import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.css';

const Contact = ({ name, number, handleDeleteContact }) => (
  <>
    <p className={styles.item__name}>{name}</p>

    <div className={styles.item__right}>
      <p>{number}</p>
      <button
        type="button"
        onClick={handleDeleteContact}
        className={styles.item__button}
      />
    </div>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
