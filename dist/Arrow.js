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

/** Arrow for use in dropdowns and other UI elements */

var Arrow = function Arrow(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var direction = _ref.direction,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['direction', 'children']);

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'Arrow',
    baseStyle: {
      display: 'inline-block',
      width: 0,
      height: 0,
      marginLeft: '.5em',
      verticalAlign: 'middle',
      borderRight: '.3125em solid transparent',
      borderLeft: '.3125em solid transparent',
      borderTop: direction === 'down' ? '.4375em solid' : null,
      borderBottom: direction === 'up' ? '.4375em solid' : null
    } }));
};

Arrow.propTypes = {
  /** Direction of arrow */
  direction: _react2.default.PropTypes.oneOf(['up', 'down'])
};

Arrow.defaultProps = {
  direction: 'down'
};

Arrow.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Arrow;