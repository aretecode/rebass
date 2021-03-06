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

/**
 * Minimal footer component with top border
 */

var Footer = function Footer(props, _ref) {
  var rebass = _ref.rebass;

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      fontSizes = _config$rebass.fontSizes,
      borderColor = _config$rebass.borderColor;

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    tagName: 'footer',
    className: 'Footer',
    baseStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: scale[3],
      paddingTop: scale[3],
      paddingBottom: scale[3],
      fontSize: fontSizes[5],
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: borderColor
    } }));
};

Footer.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Footer;