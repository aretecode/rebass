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
 * Styled hr element
 */

var Divider = function Divider(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var width = _ref.width,
      props = _objectWithoutProperties(_ref, ['width']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      borderColor = _config$rebass.borderColor;

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    tagName: 'hr',
    className: 'Divider',
    baseStyle: {
      width: width,
      marginTop: scale[2],
      marginBottom: scale[2],
      border: 0,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: borderColor
    } }));
};

Divider.propTypes = {
  /** Sets a fixed width for stylistic options */
  width: _react2.default.PropTypes.number
};

Divider.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Divider;