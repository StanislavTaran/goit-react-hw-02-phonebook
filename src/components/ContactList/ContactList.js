import React from 'react';
import propTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    contacts.length > 0 && (
      <ul>
        {contacts.map(item => {
          return (
            <li key={item.id}>
              <ContactItem contactItem={item} />
            </li>
          );
        })}
      </ul>
    )
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
