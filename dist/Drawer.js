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
 * An off-canvas drawer component
 */

var Drawer = function Drawer(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var open = _ref.open,
      size = _ref.size,
      position = _ref.position,
      onDismiss = _ref.onDismiss,
      props = _objectWithoutProperties(_ref, ['open', 'size', 'position', 'onDismiss']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      zIndex = _config$rebass.zIndex;

  var placements = {
    top: {
      top: 0,
      right: 0,
      left: 0
    },
    right: {
      top: 0,
      right: 0,
      bottom: 0
    },
    bottom: {
      right: 0,
      bottom: 0,
      left: 0
    },
    left: {
      top: 0,
      bottom: 0,
      left: 0
    }
  };

  var width = void 0,
      height = void 0,
      transform = void 0;

  if (position === 'top' || position === 'bottom') {
    height = size;
  } else {
    width = size;
  }

  var transforms = {
    top: 'translateY(-100%)',
    right: 'translateX(100%)',
    bottom: 'translateY(100%)',
    left: 'translateX(-100%)'
  };

  if (!open) {
    transform = transforms[position];
  }

  var sx = {
    dismiss: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: zIndex[3],
      display: open ? null : 'none'
    },
    content: _extends({
      position: 'fixed'
    }, placements[position], {
      zIndex: zIndex[4],
      width: width,
      height: height,
      padding: scale[2],
      transform: transform,
      transition: 'transform .2s ease-out',
      overflowX: 'hidden',
      overflowY: 'scroll'
    })
  };

  return _react2.default.createElement(
    'div',
    { className: 'Drawer' },
    _react2.default.createElement('div', { style: sx.dismiss,
      onClick: onDismiss }),
    _react2.default.createElement(_Base2.default, _extends({}, props, {
      className: 'Drawer Drawer_content',
      baseStyle: sx.content }))
  );
};

Drawer.propTypes = {
  /** Width or height of drawer, depending on placement */
  size: _react2.default.PropTypes.number,
  /** Shows and hides the drawer */
  open: _react2.default.PropTypes.bool,
  /** Position relative to the viewport */
  position: _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Click event callback for the background overlay */
  onDismiss: _react2.default.PropTypes.func
};

Drawer.defaultProps = {
  open: false,
  size: 320,
  position: 'left',
  onDismiss: function onDismiss() {},
  color: 'white',
  backgroundColor: 'default'
};

Drawer.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Drawer;