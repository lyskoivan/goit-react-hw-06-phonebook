import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import FormContacts from '../FormContacts/FormContactsContainer';
import ContactsList from '../ContactsList/ContactsListContainer';
import FilterContacts from '../FilterContacts/FilterContactsContainer';

import styles from './App.module.css';
import slideTransition from '../../transitions/slide-500.module.css';

export default class App extends Component {
  static propTypes = {
    saveContacts: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape(App.propTypes).isRequired)
      .isRequired,
  };

  componentDidMount() {
    try {
      const { saveContacts } = this.props;
      const localContacts = JSON.parse(localStorage.getItem('contacts'));
      if (localContacts) {
        saveContacts(localContacts);
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps) {
    try {
      const { contacts } = this.props;
      if (prevProps.contacts !== contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className={styles.main_wrapper}>
        <CSSTransition in appear timeout={500} classNames={slideTransition}>
          <h1>Phonebook</h1>
        </CSSTransition>

        <FormContacts />

        <h2>Contacts</h2>
        <FilterContacts />

        {contacts.length > 0 && <ContactsList />}
      </div>
    );
  }
}
