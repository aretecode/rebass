'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Base = require('./Base');

var _Base2 = _interopRequireDefault(_Base);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Stylized range input with label
 */

var Slider = function Slider(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var label = _ref.label,
      name = _ref.name,
      fill = _ref.fill,
      hideLabel = _ref.hideLabel,
      children = _ref.children,
      style = _ref.style,
      m = _ref.m,
      mt = _ref.mt,
      mr = _ref.mr,
      mb = _ref.mb,
      ml = _ref.ml,
      mx = _ref.mx,
      my = _ref.my,
      p = _ref.p,
      pt = _ref.pt,
      pr = _ref.pr,
      pb = _ref.pb,
      pl = _ref.pl,
      px = _ref.px,
      py = _ref.py,
      props = _objectWithoutProperties(_ref, ['label', 'name', 'fill', 'hideLabel', 'children', 'style', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale;

  var max = props.max || 100;
  var min = props.min || 0;
  var percent = (props.value - min) / (max - min) * 100;

  var rootProps = {
    style: style,
    m: m,
    mt: mt,
    mr: mr,
    mb: mb,
    ml: ml,
    mx: mx,
    my: my,
    p: p,
    pt: pt,
    pr: pr,
    pb: pb,
    pl: pl,
    px: px,
    py: py
  };

  var css = '\n    .Slider_input::-webkit-slider-thumb {\n      width: 24px;\n      height: 24px;\n      background-color: currentcolor;\n      border: 0;\n      border-radius: 999px;\n      -webkit-appearance: none;\n    }\n    .Slider_input::-moz-range-thumb {\n      width: 24px;\n      height: 24px;\n      background-color: currentcolor;\n      border: 0;\n      border-radius: 999px;\n    }\n  '.replace(/\n/g, '').replace(/\s\s+/g, ' ');

  var backgroundImage = fill ? 'linear-gradient(90deg, currentcolor, currentcolor ' + percent + '%, transparent ' + percent + '%)' : null;

  var sx = {
    root: {
      paddingBottom: scale[2]
    },
    input: {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      margin: 0,
      marginTop: scale[1],
      cursor: 'pointer',
      color: 'inherit',
      backgroundColor: 'rgba(0, 0, 0, ' + 1 / 8 + ')',
      backgroundImage: backgroundImage,
      backgroundClip: 'content-box',
      height: 6,
      borderRadius: 999,
      WebkitAppearance: 'none',
      appearance: 'none'
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, rootProps, {
      className: 'Slider',
      baseStyle: sx.root }),
    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
    _react2.default.createElement(_Label2.default, {
      htmlFor: name,
      hide: hideLabel,
      children: label }),
    _react2.default.createElement('input', _extends({}, props, {
      type: 'range',
      name: name,
      className: 'Slider_input',
      style: sx.input }))
  );
};

Slider.propTypes = {
  /** Label for form element */
  label: _react2.default.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: _react2.default.PropTypes.string.isRequired,
  /** Adds a fill color to the track - requires client-side JavaScript */
  fill: _react2.default.PropTypes.bool,
  /** Hides the form element label */
  hideLabel: _react2.default.PropTypes.bool
};

Slider.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Slider;