'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('./Base');

var _Base2 = _interopRequireDefault(_Base);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Link for use in navigation. Inherits color
 */

var NavItem = function NavItem(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var small = _ref.small,
      props = _objectWithoutProperties(_ref, ['small']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      scale = _config$rebass.scale,
      bold = _config$rebass.bold;

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'NavItem',
    baseStyle: {
      fontSize: small ? fontSizes[6] : fontSizes[5],
      fontWeight: bold,
      lineHeight: '1rem',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      paddingTop: small ? scale[1] / 2 : scale[1],
      paddingBottom: small ? scale[1] / 2 : scale[1],
      paddingLeft: scale[1],
      paddingRight: scale[1],
      color: 'inherit',
      cursor: 'pointer'
    } }));
};

NavItem.propTypes = {
  /** Sets a smaller font size for compact UI */
  small: _react2.default.PropTypes.bool,
  /** Root component - useful for use with react-router's Link component */
  is: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object, _react2.default.PropTypes.func])
};

NavItem.defaultProps = {
  is: 'a'
};

NavItem.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = NavItem;