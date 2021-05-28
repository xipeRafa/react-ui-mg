import React from 'react';
import PropTypes from 'prop-types';

var AnExample = function AnExample(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement("div", {
    className: "an-example"
  }, "This is an example by", name);
};

AnExample.propTypes = {
  name: PropTypes.string
};
AnExample.defaultProps = {
  name: 'jaebaebae'
};

var AnotherExample = function AnotherExample(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement("div", {
    className: "another-example"
  }, "This is another example by", name);
};

AnotherExample.propTypes = {
  name: PropTypes.string
};
AnotherExample.defaultProps = {
  name: 'jaebaebae'
};

export { AnExample, AnotherExample };
