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
 * Component for displaying text in UI
 */

var Text = function Text(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var small = _ref.small,
      bold = _ref.bold,
      props = _objectWithoutProperties(_ref, ['small', 'bold']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      b = _config$rebass.bold;

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    tagName: 'p',
    className: 'Text',
    baseStyle: {
      fontSize: small ? fontSizes[6] : fontSizes[4],
      fontWeight: bold ? b : null,
      margin: 0
    } }));
};

Text.propTypes = {
  /** Sets a smaller font size */
  small: _react2.default.PropTypes.bool,
  /** Sets bold font weight */
  bold: _react2.default.PropTypes.bool
};

Text.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Text;