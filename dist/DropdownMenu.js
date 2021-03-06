'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('./Base');

var _Base2 = _interopRequireDefault(_Base);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Absolutely positioned Menu component for use within Dropdown component
 */

var DropdownMenu = function DropdownMenu(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var open = _ref.open,
      right = _ref.right,
      top = _ref.top,
      children = _ref.children,
      onDismiss = _ref.onDismiss,
      props = _objectWithoutProperties(_ref, ['open', 'right', 'top', 'children', 'onDismiss']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      zIndex = _config$rebass.zIndex;

  var sx = {
    root: {
      display: open ? null : 'none',
      position: 'absolute',
      left: right ? 'auto' : 0,
      right: right ? 0 : 'auto',
      top: top ? 'auto' : '100%',
      bottom: top ? '100%' : 'auto',
      zIndex: 4
    },
    overlay: {
      position: 'fixed',
      display: open ? null : 'none',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    content: {
      position: 'relative',
      zIndex: zIndex[1]
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'DropdownMenu',
      baseStyle: sx.root }),
    _react2.default.createElement('div', { style: sx.overlay,
      onClick: onDismiss }),
    _react2.default.createElement(
      'div',
      { style: sx.content },
      _react2.default.createElement(_Menu2.default, _extends({}, props, {
        children: children }))
    )
  );
};

DropdownMenu.propTypes = {
  /** Toggles visibility of DropdownMenu */
  open: _react2.default.PropTypes.bool,
  /** Anchors menu to the right */
  right: _react2.default.PropTypes.bool,
  /** Anchors menu to the top */
  top: _react2.default.PropTypes.bool,
  /** Click event callback for the background overlay */
  onDismiss: _react2.default.PropTypes.func
};

DropdownMenu.defaultProps = {
  open: false,
  onDismiss: function onDismiss() {}
};

DropdownMenu.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = DropdownMenu;