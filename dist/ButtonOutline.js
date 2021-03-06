'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A general purpose outline style button element with customizable colors
 */

var ButtonOutline = function ButtonOutline(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var style = _ref.style,
      props = _objectWithoutProperties(_ref, ['style']);

  var sx = _extends({
    backgroundColor: 'transparent'
  }, style);

  return _react2.default.createElement(_Button2.default, _extends({}, props, {
    _className: 'ButtonOutline',
    baseStyle: {
      boxShadow: 'inset 0 0 0 1px'
    },
    style: sx }));
};

ButtonOutline.propTypes = {
  /** Pass an href prop to make the ButtonOutline an <a> tag instead of a <button> */
  href: _react2.default.PropTypes.string,
  /** Text color */
  color: _react2.default.PropTypes.string,
  /** Controls the border radius for creating button groups */
  rounded: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])]),
  /** Creates a pill style button */
  pill: _react2.default.PropTypes.bool,
  /** Creates a larger button */
  big: _react2.default.PropTypes.bool
};

ButtonOutline.defaultProps = {
  color: 'primary',
  inverted: false,
  rounded: true
};

ButtonOutline.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = ButtonOutline;