import React from 'react';
import PropTypes from 'prop-types';

import './AnExample.css';

const AnExample = ({ label }) => (
  <input className='an-example' type="button" value={label} />
);

AnExample.propTypes = {
  label: PropTypes.string,
};

AnExample.defaultProps = {
  label: ' Rafa-button',
};

export default AnExample;
