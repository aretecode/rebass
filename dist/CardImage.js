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
 * Image for use within the Card component
 */

var CardImage = function CardImage(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var src = _ref.src,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['src', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale;

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    tagName: 'img',
    className: 'CardImage',
    src: src,
    baseStyle: {
      display: 'block',
      width: 'calc(100% + ' + 2 * scale[1] + 'px)',
      maxWidth: 'none',
      height: 'auto',
      margin: -scale[1],
      marginBottom: scale[1]
    } }));
};

CardImage.propTypes = {
  /** Image source */
  src: _react2.default.PropTypes.string.isRequired
};

CardImage.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = CardImage;