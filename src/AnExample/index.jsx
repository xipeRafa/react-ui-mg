import React from 'react';
import PropTypes from 'prop-types';

import './AnExample.css';

const AnExample = ({ name }) => (
  <div className="an-example">
    <p>This is an example by</p> 
    { name }
  </div>
);

AnExample.propTypes = {
  name: PropTypes.string,
};

AnExample.defaultProps = {
  name: ' Rafa',
};

export default AnExample;
