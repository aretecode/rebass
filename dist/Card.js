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
 * Styled box with border
 */

var Card = function Card(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var width = _ref.width,
      props = _objectWithoutProperties(_ref, ['width']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      borderColor = _config$rebass.borderColor;

  var sx = {
    width: width,
    padding: scale[1],
    marginBottom: scale[2],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: borderColor,
    overflow: 'hidden'
  };

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'Card',
    baseStyle: sx }));
};

Card.propTypes = {
  /** Width of card */
  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string])
};

Card.defaultProps = {
  rounded: true
};

Card.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Card;