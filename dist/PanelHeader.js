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
 * Header for Panel component with vertical centering using flexbox
 */

var PanelHeader = function PanelHeader(props, _ref) {
  var rebass = _ref.rebass;

  var _config$rebass = _extends({}, _config2.default, rebass),
      bold = _config$rebass.bold,
      scale = _config$rebass.scale,
      borderRadius = _config$rebass.borderRadius;

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'PanelHeader',
    inverted: true,
    baseStyle: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: bold,
      marginTop: -scale[2] - 1,
      marginRight: -scale[2] - 1,
      marginLeft: -scale[2] - 1,
      marginBottom: scale[2],
      padding: scale[2],
      borderRadius: borderRadius + 'px ' + borderRadius + 'px 0 0'
    } }));
};

PanelHeader.propTypes = {
  /** Sets color from config */
  theme: _react2.default.PropTypes.oneOf(['primary', 'secondary', 'default', 'info', 'success', 'warning', 'error'])
};

PanelHeader.defaultProps = {
  theme: 'default',
  inverted: true
};

PanelHeader.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = PanelHeader;