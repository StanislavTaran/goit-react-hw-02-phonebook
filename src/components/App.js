import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    // filter: '',
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  addToContacts = () => {
    const { name, number } = this.state;
    this.setState(state => {
      return { contacts: [...state.contacts, { name, number, id: uuidv4() }] };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <ContactForm
          title="Phonebook"
          onAddContact={this.addToContacts}
          onChange={this.handleChange}
        />
        <ContactList contacts={contacts} />
      </>
    );
  }
}
