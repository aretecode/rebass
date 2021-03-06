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
 * A general purpose button element with customizable colors
 */

var Button = function Button(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var href = _ref.href,
      big = _ref.big,
      baseStyle = _ref.baseStyle,
      _className = _ref._className,
      props = _objectWithoutProperties(_ref, ['href', 'big', 'baseStyle', '_className']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      bold = _config$rebass.bold,
      scale = _config$rebass.scale;

  var Component = href ? 'a' : 'button';

  // scale[3] also used in form elements
  var minHeight = scale[3];

  var sx = _extends({}, baseStyle, {
    fontFamily: 'inherit',
    fontSize: fontSizes[5],
    fontWeight: bold,
    lineHeight: scale[2] + 'px',
    minHeight: minHeight,
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: big ? scale[2] : scale[1],
    paddingBottom: big ? scale[2] : scale[1],
    paddingLeft: scale[2],
    paddingRight: scale[2],
    cursor: 'pointer',
    border: 0
  });

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    tagName: Component,
    className: _className || 'Button',
    href: href,
    baseStyle: sx }));
};

Button.propTypes = {
  /** Pass an href prop to make the Button an <a> tag instead of a <button> */
  href: _react2.default.PropTypes.string,
  /** Button color - can either be a key from the config colors object or any color value */
  color: _react2.default.PropTypes.string,
  /** Background color - can either be a key from the config colors object or any color value */
  backgroundColor: _react2.default.PropTypes.string,
  /** Controls the border radius for creating button groups */
  rounded: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])]),
  /** Creates a pill style button */
  pill: _react2.default.PropTypes.bool,
  /** Creates a larger button */
  big: _react2.default.PropTypes.bool,
  /** Sets color from config */
  theme: _react2.default.PropTypes.oneOf(['primary', 'secondary', 'default', 'info', 'success', 'warning', 'error'])
};

Button.defaultProps = {
  color: 'white',
  backgroundColor: 'primary',
  inverted: true,
  rounded: true
};

Button.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Button;