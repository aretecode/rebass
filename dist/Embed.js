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
 * Responsive media embed wrapper
 */

var Embed = function Embed(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var ratio = _ref.ratio,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['ratio', 'children']);

  var childProps = {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      border: 0
    }
  };

  var styledChildren = _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, childProps);
  });

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'Embed',
    children: styledChildren,
    baseStyle: {
      position: 'relative',
      height: 0,
      padding: 0,
      paddingBottom: ratio * 100 + '%',
      overflow: 'hidden'
    } }));
};

Embed.propTypes = {
  /**
   * Aspect ratio for the embed.
   * Divide height over width to calculate.
   * E.g. ratio={9/16}
   */
  ratio: _react2.default.PropTypes.number
};

Embed.defaultProps = {
  ratio: 9 / 16
};

Embed.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Embed;