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

var M = 'M';
var A = 'A';
var L = 'L';
var rad = function rad(a) {
  return Math.PI * a / 180;
};
var rx = function rx(c, r, a) {
  return c + r * Math.cos(rad(a));
};
var ry = function ry(c, r, a) {
  return c + r * Math.sin(rad(a));
};

var createPath = function createPath(size, value, strokeWidth) {
  var c = Math.abs(size) / 2; // Center
  var r1 = c; // Outer radius
  var r2 = c - Math.abs(strokeWidth); // Inner radius
  var angle = Math.abs(value % 1) * 360 - 90;

  var largeArc = value > 0.5 ? 1 : 0;

  var arc1 = value === 1 ? [A, r1, r1, 0, 0, 1, c, c + r1, A, r1, r1, 0, 0, 1, c, c - r1] : [A, r1, r1, 0, largeArc, 1, rx(c, r1, angle), ry(c, r1, angle)];

  var arc2 = value === 1 ? [A, r2, r2, 0, 0, 0, c, c + r2, A, r2, r2, 0, 0, 0, c, c - r2] : [A, r2, r2, 0, largeArc, 0, c, c - r2];

  return [M, c, c - r1].concat(arc1, [L, rx(c, r2, angle), ry(c, r2, angle)], arc2).join(' ');
};

var createBg = function createBg(size, strokeWidth) {
  var c = Math.abs(size) / 2; // Center
  var r1 = c; // Outer radius
  var r2 = c - Math.abs(strokeWidth); // Inner radius

  return [M, c, 0, A, r1, r1, 0, 0, 1, c, size, A, r1, r1, 0, 0, 1, c, 0, M, c, c - r2, A, r2, r2, 0, 0, 0, c, c + r2, A, r2, r2, 0, 0, 0, c, c - r2].join(' ');
};

/**
 * A single-value donut chart with percentage
 */

var Donut = function Donut(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var value = _ref.value,
      size = _ref.size,
      strokeWidth = _ref.strokeWidth,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['value', 'size', 'strokeWidth', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      bold = _config$rebass.bold;

  var viewBox = '0 0 ' + size + ' ' + size;

  var sx = {
    root: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size / 4,
      fontWeight: bold,
      lineHeight: 1,
      width: size,
      height: size
    },
    svg: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      fill: 'currentcolor'
    },
    bg: {
      opacity: 1 / 16
    },
    percentage: {
      marginRight: '-.25em'
    },
    unit: {
      fontSize: '.5em',
      verticalAlign: 'super'
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'Donut',
      baseStyle: sx.root }),
    _react2.default.createElement(
      'svg',
      {
        viewBox: viewBox,
        width: size,
        height: size,
        style: sx.svg },
      _react2.default.createElement('path', { d: createBg(size, strokeWidth), style: sx.bg }),
      _react2.default.createElement('path', { d: createPath(size, value, strokeWidth) })
    ),
    children,
    !children && _react2.default.createElement(
      'span',
      { style: sx.percentage },
      Math.round(value * 100),
      _react2.default.createElement(
        'span',
        { style: sx.unit },
        '%'
      )
    )
  );
};

Donut.propTypes = {
  /** Value from 0 to 1 */
  value: _react2.default.PropTypes.number,
  /** Sets width and height */
  size: _react2.default.PropTypes.number,
  /** Sets width of stroke */
  strokeWidth: _react2.default.PropTypes.number,
  /** Text color - can either be a key from the config colors object or any color value */
  color: _react2.default.PropTypes.string
};

Donut.defaultProps = {
  value: 0,
  size: 128,
  strokeWidth: 8,
  color: 'primary'
};

Donut.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Donut;