'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('./Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Unstyled display block link
 */

var LinkBlock = function LinkBlock(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var _className = _ref._className,
      props = _objectWithoutProperties(_ref, ['_className']);

  var sx = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit'
  };

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: _className || 'LinkBlock',
    baseStyle: sx }));
};

LinkBlock.propTypes = {
  /** Root component - useful for use with react-router's Link component */
  is: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object, _react2.default.PropTypes.func])
};

LinkBlock.defaultProps = {
  is: 'a'
};

LinkBlock.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = LinkBlock;