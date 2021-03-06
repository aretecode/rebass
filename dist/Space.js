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
 * Inline-block element for adding space between elements
 */

var Space = function Space(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var x = _ref.x,
      auto = _ref.auto,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['x', 'auto', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale;

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'Space',
    baseStyle: {
      display: 'inline-block',
      flex: auto ? '1 1 auto' : null,
      width: scale[x]
    } }));
};

Space.propTypes = {
  /** Width of space based on the spacing scale */
  x: _react2.default.PropTypes.oneOf([1, 2, 3, 4]),
  /** Sets flex: 1 1 auto */
  auto: _react2.default.PropTypes.bool
};

Space.defaultProps = {
  x: 1
};

Space.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Space;