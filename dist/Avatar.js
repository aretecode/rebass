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
 * A circular image for displaying user avatars
 */

var Avatar = function Avatar(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['size', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      colors = _config$rebass.colors;

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    tagName: 'img',
    className: 'Avatar',
    width: size,
    height: size,
    baseStyle: {
      maxWidth: 'none',
      width: size,
      height: size,
      backgroundColor: colors.gray
    }
  }));
};

Avatar.propTypes = {
  /** Width and height of image in pixels */
  size: _react2.default.PropTypes.number
};

Avatar.defaultProps = {
  size: 48,
  circle: true
};

Avatar.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Avatar;