(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Example = {}, global.React, global.PropTypes));
}(this, (function (exports, React, PropTypes) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
