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
 * Generic box with visual styling
 */

var Block = function Block(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var borderColor = _ref.borderColor,
      border = _ref.border,
      borderTop = _ref.borderTop,
      borderRight = _ref.borderRight,
      borderBottom = _ref.borderBottom,
      borderLeft = _ref.borderLeft,
      props = _objectWithoutProperties(_ref, ['borderColor', 'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      colors = _config$rebass.colors;

  borderColor = colors[borderColor] || borderColor || colors.primary;

  var sx = {
    marginTop: scale[2],
    marginBottom: scale[2],
    borderStyle: border ? 'solid' : 'none',
    borderTopStyle: borderTop ? 'solid' : null,
    borderRightStyle: borderRight ? 'solid' : null,
    borderBottomStyle: borderBottom ? 'solid' : null,
    borderLeftStyle: borderLeft ? 'solid' : null,
    borderWidth: 4,
    borderColor: borderColor
  };

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'Block',
    baseStyle: sx }));
};

Block.propTypes = {
  /** Text color - can either be a key from the config colors object or any color value */
  color: _react2.default.PropTypes.string,
  /** Background color - can either be a key from the config colors object or any color value */
  backgroundColor: _react2.default.PropTypes.string,
  /** Border color - can either be a key from the config colors object or any color value */
  borderColor: _react2.default.PropTypes.string,
  /** Adds a border */
  border: _react2.default.PropTypes.bool,
  /** Adds a border to the top side */
  borderTop: _react2.default.PropTypes.bool,
  /** Adds a border to the right side */
  borderRight: _react2.default.PropTypes.bool,
  /** Adds a border to the bottom side */
  borderBottom: _react2.default.PropTypes.bool,
  /** Adds a border to the left side */
  borderLeft: _react2.default.PropTypes.bool,

  /** Applies margin with the margin utility based on the spacing scale */
  m: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top based on the spacing scale */
  mt: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin right based on the spacing scale */
  mr: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin bottom based on the spacing scale */
  mb: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left based on the spacing scale */
  ml: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left and right based on the spacing scale */
  mx: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top and bottom based on the spacing scale */
  my: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Applies padding with the padding utility based on the spacing scale */
  p: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top based on the spacing scale */
  pt: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding right based on the spacing scale */
  pr: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding bottom based on the spacing scale */
  pb: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left based on the spacing scale */
  pl: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left and right based on the spacing scale */
  px: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top and bottom based on the spacing scale */
  py: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Controls border radius */
  rounded: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])])
};

Block.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Block;