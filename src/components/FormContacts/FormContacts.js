import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './FormContacts.module.css';
import slideTransition from '../../transitions/slide-250.module.css';

import Message from '../Message/Message';

export default class FormContacts extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  };

  state = {
    name: '',
    number: '',
    showError: false,
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!name || !number) return;

    const sameContact = this.props.contacts.find(
      contact => contact.name === name,
    );

    if (sameContact) {
      this.setState(
        prevState => ({
          showError: !prevState.showError,
        }),
        () =>
          setTimeout(() => {
            this.setState(prevState => ({ showError: !prevState.showError }));
          }, 2000),
      );

      this.reset();
      return;
    }

    const newContact = {
      name,
      number,
      id: shortid.generate(),
    };

    this.props.addNewContact(newContact);
    this.reset();
  };

  render() {
    const { name, number, showError } = this.state;
    return (
      <>
        <CSSTransition
          in={showError}
          timeout={250}
          classNames={slideTransition}
          unmountOnExit
        >
          <Message />
        </CSSTransition>

        <form onSubmit={this.handleSubmit} className={styles.contacts__form}>
          <label
            htmlFor={shortid.generate()}
            className={styles.contacts__label}
          >
            Name
            <input
              type="text"
              value={name}
              onChange={this.handleChangeName}
              className={styles.contacts__input}
            />
          </label>
          <label
            htmlFor={shortid.generate()}
            className={styles.contacts__label}
          >
            Number
            <input
              type="tel"
              value={number}
              onChange={this.handleChangeNumber}
              className={styles.contacts__input}
            />
          </label>
          <button type="submit" className={styles.contacts__button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
