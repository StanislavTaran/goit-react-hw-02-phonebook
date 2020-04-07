import React, { Component } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default class ContactForm extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    onAddContact: propTypes.func.isRequired,
    onChange: propTypes.func.isRequired,
  };
  // state = {
  //   name: '',
  //   number: '',
  // };

  InputNameId = uuidv4();

  InputNuberId = uuidv4();

  render() {
    const { title, onAddContact, onChange } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <label htmlFor={this.InputNameId}>Name:</label>
        <input
          name="name"
          id={this.InputNameId}
          type="text"
          onChange={onChange}
        />
        <label htmlFor={this.InputNuberId}>Number:</label>
        <input
          name="number"
          id={this.InputNuberId}
          type="number"
          onChange={onChange}
        />
        <button type="button" onClick={onAddContact}>
          Add contact
        </button>
      </div>
    );
  }
}
