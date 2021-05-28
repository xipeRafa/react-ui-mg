import React from 'react';
import PropTypes from 'prop-types';

import './AnotherExample.css';

const AnotherExample = ({ name }) => (
  <div className="another-example">
    <p>This is another example by</p>
    { name }
  </div>
);

AnotherExample.propTypes = {
  name: PropTypes.string,
};

AnotherExample.defaultProps = {
  name: 'michael ',
};

export default AnotherExample;
