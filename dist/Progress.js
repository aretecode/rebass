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
 * Progress element
 */

var Progress = function Progress(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var value = _ref.value,
      props = _objectWithoutProperties(_ref, ['value']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale;

  var css = '\n    .Progress_progress::-webkit-progress-bar {\n      background-color: rgba(0, 0, 0, .125);\n    }\n    .Progress_progress::-webkit-progress-value {\n      background-color: currentcolor;\n    }\n    .Progress_progress::-moz-progress-bar {\n      background-color: currentcolor;\n    }\n  '.replace(/\n/g, '').replace(/\s\s+/g, ' ');

  var sx = {
    root: {
      marginBottom: scale[2],
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, .125)',
      borderRadius: 9999
    },
    progress: {
      display: 'block',
      width: '100%',
      height: 8,
      overflow: 'hidden',
      border: 0,
      WebkitAppearance: 'none',
      appearance: 'none'
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'Progress',
      baseStyle: sx.root }),
    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
    _react2.default.createElement('progress', _extends({}, props, {
      className: 'Progress_progress',
      value: value,
      children: value,
      style: sx.progress }))
  );
};

Progress.propTypes = {
  /** Value for progress bar */
  value: _react2.default.PropTypes.number,
  /** Bar color - can either be a key from the config colors object or any color value */
  color: _react2.default.PropTypes.string
};

Progress.defaultProps = {
  color: 'primary'
};

Progress.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Progress;