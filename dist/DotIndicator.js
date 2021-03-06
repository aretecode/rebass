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
 * Dot indicator buttons for use in carousels
 */

var DotIndicator = function DotIndicator(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var length = _ref.length,
      active = _ref.active,
      onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['length', 'active', 'onClick', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale;

  var sx = {
    root: {
      display: 'inline-flex'
    },
    button: {
      fontSize: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      width: scale[2],
      height: scale[3],
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer'
    },
    dot: {
      width: scale[1],
      height: scale[1],
      margin: 'auto',
      backgroundColor: 'currentcolor',
      borderRadius: 99999
    }
  };

  var handleClick = function handleClick(i) {
    return function (e) {
      e.preventDefault();
      onClick(i);
    };
  };

  var dots = Array.from({ length: length }, function (a, b) {
    return b;
  });

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'DotIndicator',
      baseStyle: sx.root }),
    dots.map(function (d) {
      return _react2.default.createElement(
        'button',
        {
          key: d,
          style: _extends({}, sx.button, {
            opacity: d !== active ? 0.375 : 0.875
          }),
          onClick: handleClick(d) },
        _react2.default.createElement('div', { style: sx.dot })
      );
    })
  );
};

DotIndicator.propTypes = {
  /** Number of dot buttons to show */
  length: _react2.default.PropTypes.number,
  /** Index of the currently active dot */
  active: _react2.default.PropTypes.number,
  /** Click event callback - returns index of clicked button */
  onClick: _react2.default.PropTypes.func
};

DotIndicator.defaultProps = {
  onClick: function onClick() {}
};

DotIndicator.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = DotIndicator;