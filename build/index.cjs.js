'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var AnExample = function AnExample(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "an-example"
  }, "This is an example by", name);
};

AnExample.propTypes = {
  name: PropTypes__default['default'].string
};
AnExample.defaultProps = {
  name: 'jaebaebae'
};

var AnotherExample = function AnotherExample(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "another-example"
  }, "This is another example by", name);
};

AnotherExample.propTypes = {
  name: PropTypes__default['default'].string
};
AnotherExample.defaultProps = {
  name: 'jaebaebae'
};

exports.AnExample = AnExample;
exports.AnotherExample = AnotherExample;
