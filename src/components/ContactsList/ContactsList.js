import React from 'react';
import PropTypes from 'prop-types';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Contact from '../Contact/Contact';

import styles from './ContactsList.module.css';
import slideTransition from '../../transitions/slide-250.module.css';

const ContactsList = ({ contacts, handleDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.contacts__list}>
    {contacts.map(contact => (
      <CSSTransition
        key={contact.id}
        timeout={250}
        classNames={slideTransition}
      >
        <li className={styles.list__items}>
          <Contact
            name={contact.name}
            number={contact.number}
            handleDeleteContact={() => handleDeleteContact(contact.id)}
          />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
