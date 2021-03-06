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

/** Component for displaying small status indicators */

var Badge = function Badge(props, _ref) {
  var rebass = _ref.rebass;

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      bold = _config$rebass.bold,
      scale = _config$rebass.scale,
      colors = _config$rebass.colors;

  var sx = {
    fontSize: fontSizes[6],
    fontWeight: bold,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: props.circle ? scale[2] : null,
    height: scale[2],
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: props.circle ? 0 : scale[1],
    paddingRight: props.circle ? 0 : scale[1],
    overflow: 'hidden',
    color: colors.white,
    backgroundColor: colors.default
  };

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'Badge',
    inverted: true,
    baseStyle: sx }));
};

Badge.propTypes = {
  /** Sets color based on theme */
  theme: _react2.default.PropTypes.oneOf(['primary', 'secondary', 'default', 'info', 'success', 'warning', 'error']),
  /** Controls border radius */
  rounded: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])]),
  /** Sets pill style border radii */
  pill: _react2.default.PropTypes.bool,
  /** Sets width and border radius for circular badges */
  circle: _react2.default.PropTypes.bool
};

Badge.defaultProps = {
  theme: 'default',
  rounded: true
};

Badge.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Badge;