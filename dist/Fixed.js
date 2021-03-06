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
 * Layout container for fixed positioning children
 */

var Fixed = function Fixed(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      zIndex = _ref.zIndex,
      props = _objectWithoutProperties(_ref, ['top', 'right', 'bottom', 'left', 'zIndex']);

  var sx = {
    position: 'fixed',
    top: top ? 0 : null,
    right: right ? 0 : null,
    bottom: bottom ? 0 : null,
    left: left ? 0 : null,
    zIndex: zIndex
  };

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'Fixed',
    baseStyle: sx }));
};

Fixed.propTypes = {
  /** Sets top: 0 */
  top: _react2.default.PropTypes.bool,
  /** Sets right: 0 */
  right: _react2.default.PropTypes.bool,
  /** Sets bottom: 0 */
  bottom: _react2.default.PropTypes.bool,
  /** Sets left: 0 */
  left: _react2.default.PropTypes.bool,
  /** Sets z-index */
  zIndex: _react2.default.PropTypes.number
};

exports.default = Fixed;