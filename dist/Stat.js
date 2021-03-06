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
 * Styled number display for statistics
 */

var Stat = function Stat(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var value = _ref.value,
      label = _ref.label,
      unit = _ref.unit,
      topLabel = _ref.topLabel,
      props = _objectWithoutProperties(_ref, ['value', 'label', 'unit', 'topLabel']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      bold = _config$rebass.bold,
      scale = _config$rebass.scale;

  var sx = {
    root: {
      display: 'inline-block'
    },
    value: {
      fontSize: fontSizes[0],
      letterSpace: '-.125em',
      fontWeight: bold,
      lineHeight: 1,
      marginTop: topLabel ? scale[1] / 2 : null,
      marginBottom: topLabel ? null : scale[1] / 2
    },
    unit: {
      fontSize: fontSizes[3]
    },
    label: {
      fontSize: fontSizes[6],
      fontWeight: bold,
      lineHeight: 1
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'Stat',
      baseStyle: sx.root }),
    topLabel && _react2.default.createElement(
      'div',
      { style: sx.label },
      label
    ),
    _react2.default.createElement(
      'div',
      { style: sx.value },
      value,
      unit && _react2.default.createElement(
        'span',
        { style: sx.unit },
        unit
      )
    ),
    !topLabel && _react2.default.createElement(
      'div',
      { style: sx.label },
      label
    )
  );
};

Stat.propTypes = {
  /** Value for stat shown in large font size */
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
  /** Optional unit for displaying next to value */
  unit: _react2.default.PropTypes.string,
  /** Label for stat */
  label: _react2.default.PropTypes.string,
  /** Displays label above value */
  topLabel: _react2.default.PropTypes.bool
};

Stat.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Stat;