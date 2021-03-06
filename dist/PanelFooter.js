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
 * Footer for Panel component with vertical centering using flexbox
 */

var PanelFooter = function PanelFooter(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      colors = _config$rebass.colors,
      borderRadius = _config$rebass.borderRadius,
      fontSizes = _config$rebass.fontSizes;

  var borderColor = colors[theme];

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'PanelFooter',
    baseStyle: {
      fontSize: fontSizes[6],
      display: 'flex',
      alignItems: 'center',
      marginTop: scale[2],
      marginRight: -scale[2],
      marginBottom: -scale[2],
      marginLeft: -scale[2],
      padding: scale[2],
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderColor: borderColor,
      borderRadius: '0 0 ' + borderRadius + 'px ' + borderRadius + 'px'
    } }));
};

PanelFooter.propTypes = {
  /** Sets color based on theme */
  theme: _react2.default.PropTypes.oneOf(['primary', 'secondary', 'default', 'info', 'success', 'warning', 'error'])
};

PanelFooter.defaultProps = {
  theme: 'default'
};

PanelFooter.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = PanelFooter;