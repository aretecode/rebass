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
 * Binary toggle switch component
 */

var Switch = function Switch(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ['checked']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      colors = _config$rebass.colors,
      borderColor = _config$rebass.borderColor;

  var color = checked ? colors.success : borderColor;
  var transform = checked ? 'translateX(' + scale[3] * 0.5 + 'px)' : 'translateX(0)';

  var sx = {
    root: {
      display: 'inline-flex',
      width: scale[3] * 1.5,
      height: scale[3],
      color: color,
      backgroundColor: checked ? 'currentcolor' : null,
      borderRadius: 99999,
      boxShadow: 'inset 0 0 0 2px',
      cursor: 'pointer'
    },
    dot: {
      width: scale[3],
      height: scale[3],
      transitionProperty: 'transform, color',
      transitionDuration: '.1s',
      transitionTimingFunction: 'ease-out',
      transform: transform,
      boxShadow: 'inset 0 0 0 2px',
      borderRadius: 99999,
      color: color,
      backgroundColor: colors.white
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'Switch',
      role: 'checkbox',
      'aria-checked': checked,
      baseStyle: sx.root }),
    _react2.default.createElement('div', { style: sx.dot })
  );
};

Switch.propTypes = {
  /** Sets the Switch to an active style */
  checked: _react2.default.PropTypes.bool
};

Switch.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Switch;