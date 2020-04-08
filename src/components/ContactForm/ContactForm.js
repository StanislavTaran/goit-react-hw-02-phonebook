import React, { Component } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default class ContactForm extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    onAddContact: propTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  InputNameId = uuidv4();

  InputNuberId = uuidv4();

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { onAddContact } = this.props;
    e.preventDefault();
    onAddContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { title } = this.props;
    const { name, number } = this.state;

    return (
      <div>
        <h2>{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.InputNameId}>Name:</label>
          <input
            name="name"
            id={this.InputNameId}
            type="text"
            onChange={this.handleChange}
            value={name}
          />
          <label htmlFor={this.InputNuberId}>Number:</label>
          <input
            name="number"
            id={this.InputNuberId}
            type="number"
            onChange={this.handleChange}
            value={number}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
