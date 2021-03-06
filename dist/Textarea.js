'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Base = require('./Base');

var _Base2 = _interopRequireDefault(_Base);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Textarea form element with label
 */

var Textarea = function Textarea(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var label = _ref.label,
      name = _ref.name,
      message = _ref.message,
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
      props = _objectWithoutProperties(_ref, ['label', 'name', 'message', 'hideLabel', 'children', 'style', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      colors = _config$rebass.colors,
      borderColor = _config$rebass.borderColor;

  var invalid = props['aria-invalid'] || props.invalid;

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

  var sx = {
    root: {
      marginBottom: scale[2],
      color: invalid ? colors.error : null
    },
    textarea: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      padding: scale[1],
      borderWidth: 1,
      borderStyles: 'solid',
      borderColor: borderColor
    }
  };

  var cx = (0, _classnames2.default)('Textarea', {
    'isInvalid': invalid,
    'isDisabled': props.disabled,
    'isReadonly': props.readOnly
  });

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, rootProps, {
      className: cx,
      baseStyle: sx.root }),
    _react2.default.createElement(_Label2.default, {
      htmlFor: name,
      hide: hideLabel,
      children: label }),
    _react2.default.createElement(_Base2.default, _extends({}, props, {
      tagName: 'textarea',
      name: name,
      baseStyle: sx.textarea })),
    message && _react2.default.createElement(_Text2.default, { small: true, children: message })
  );
};

Textarea.propTypes = {
  /** Label for form element */
  label: _react2.default.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: _react2.default.PropTypes.string.isRequired,
  /** Adds a helper or error message below the textarea */
  message: _react2.default.PropTypes.string,
  /** Hides the form element label */
  hideLabel: _react2.default.PropTypes.bool
};

Textarea.defaultProps = {
  rounded: true
};

Textarea.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Textarea;