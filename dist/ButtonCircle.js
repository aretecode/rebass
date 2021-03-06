'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A circular button suited for use with icons
 */

var ButtonCircle = function ButtonCircle(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var size = _ref.size,
      children = _ref.children,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['size', 'children', 'style']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale;

  var sx = {
    root: _extends({
      fontSize: 'inherit',
      width: size || scale[3],
      height: size || scale[3],
      padding: 0,
      borderRadius: 99999
    }, style),
    inner: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center'
    }
  };

  return _react2.default.createElement(
    _Button2.default,
    _extends({}, props, {
      _className: 'ButtonCircle',
      style: sx.root }),
    _react2.default.createElement(
      'div',
      { style: sx.inner },
      children
    )
  );
};

ButtonCircle.propTypes = {
  /** Pass an href prop to make the ButtonCircle an <a> tag instead of a <button> */
  href: _react2.default.PropTypes.string,
  /** Text color - can either be a key from the config colors object or any color value */
  color: _react2.default.PropTypes.string,
  /** Background color - can either be a key from the config colors object or any color value */
  backgroundColor: _react2.default.PropTypes.string,
  /** Sets width and height of button */
  size: _react2.default.PropTypes.number
};

ButtonCircle.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = ButtonCircle;