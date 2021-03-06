'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _ButtonOutline = require('./ButtonOutline');

var _ButtonOutline2 = _interopRequireDefault(_ButtonOutline);

var _Base = require('./Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Inline grouped form for search or other simple forms
 */

var InlineForm = function InlineForm(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      buttonLabel = _ref.buttonLabel,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['label', 'name', 'value', 'placeholder', 'onChange', 'buttonLabel', 'onClick']);

  var sx = {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      flex: '1 1 auto'
    },
    button: {
      marginLeft: -1
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      tagName: 'form',
      className: 'InlineForm',
      baseStyle: sx.root }),
    _react2.default.createElement(_Input2.default, {
      name: name,
      label: label,
      value: value,
      placeholder: placeholder,
      onChange: onChange,
      style: sx.input,
      mb: 0,
      hideLabel: true,
      rounded: 'left' }),
    _react2.default.createElement(_ButtonOutline2.default, {
      type: 'submit',
      children: buttonLabel,
      onClick: onClick,
      style: sx.button,
      rounded: 'right' })
  );
};

InlineForm.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

InlineForm.propTypes = {
  /** Input label */
  label: _react2.default.PropTypes.string.isRequired,
  /** Input name */
  name: _react2.default.PropTypes.string.isRequired,
  /** Input value */
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
  /** Input placeholder */
  placeholder: _react2.default.PropTypes.string,
  /** onChange handler for input */
  onChange: _react2.default.PropTypes.func,
  /** Text for button */
  buttonLabel: _react2.default.PropTypes.string,
  /** onClick handler for button */
  onClick: _react2.default.PropTypes.func
};

InlineForm.defaultProps = {
  buttonLabel: 'Go',
  onClick: function onClick() {},
  onChange: function onChange() {}
};

exports.default = InlineForm;