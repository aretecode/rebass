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
 * Fixed positioned overlay for use with modal dialogs
 */

var Overlay = function Overlay(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var open = _ref.open,
      dark = _ref.dark,
      fullWidth = _ref.fullWidth,
      box = _ref.box,
      onDismiss = _ref.onDismiss,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['open', 'dark', 'fullWidth', 'box', 'onDismiss', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      zIndex = _config$rebass.zIndex,
      scale = _config$rebass.scale,
      colors = _config$rebass.colors,
      borderRadius = _config$rebass.borderRadius;

  var innerStyle = {
    padding: scale[3],
    backgroundColor: colors.white,
    borderRadius: borderRadius
  };

  var sx = {
    root: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: zIndex[2],
      display: open ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dismiss: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: dark ? colors.black : colors.white,
      opacity: 0.875
    },
    inner: _extends({
      position: 'relative',
      zIndex: zIndex[1],
      minWidth: 320,
      width: fullWidth ? '100%' : null
    }, box ? innerStyle : {})
  };

  return _react2.default.createElement(
    'div',
    {
      className: 'Overlay',
      style: sx.root },
    _react2.default.createElement('div', { style: sx.dismiss,
      onClick: onDismiss }),
    _react2.default.createElement(_Base2.default, _extends({}, props, {
      baseStyle: sx.inner,
      children: children }))
  );
};

Overlay.propTypes = {
  /** Shows and hides overlay */
  open: _react2.default.PropTypes.bool,
  /** Sets dark transparent overlay style */
  dark: _react2.default.PropTypes.bool,
  /** Sets padding and background white for the content container */
  box: _react2.default.PropTypes.bool,
  /** Sets content container full width */
  fullWidth: _react2.default.PropTypes.bool,
  /** Click event callback for the Overlay background */
  onDismiss: _react2.default.PropTypes.func
};

Overlay.defaultProps = {
  open: false,
  dark: true,
  onDismiss: function onDismiss() {}
};

Overlay.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Overlay;