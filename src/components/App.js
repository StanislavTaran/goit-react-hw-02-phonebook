import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  hasContact = name => {
    const { contacts } = this.state;
    return contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
  };

  addToContacts = ({ name, number }) => {
    const isAlreadyinContacts = this.hasContact(name);

    if (isAlreadyinContacts) {
      alert(`Already in contacts ${name}`);
    } else {
      const contact = {
        name,
        number,
        id: uuidv4(),
      };
      this.setState(state => {
        return { contacts: [...state.contacts, contact] };
      });
    }
  };

  hanleFilterChange = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  applyFilter() {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  render() {
    const { contacts } = this.state;

    const filteredContacts = this.applyFilter(contacts);

    return (
      <>
        <ContactForm title="Phonebook" onAddContact={this.addToContacts} />
        {contacts.length > 1 && (
          <Filter hanleFilterChange={this.hanleFilterChange} />
        )}
        <ContactList contacts={filteredContacts} />
      </>
    );
  }
}
