import React from 'react';
import propTypes from 'prop-types';

const ContactItem = ({ contactItem }) => {
  const { name, number } = contactItem;
  return (
    <>
      <p>
        {name}
        <span> : </span>
        <span>{number}</span>
      </p>
    </>
  );
};

ContactItem.propTypes = {
  contactItem: propTypes.shape({
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
