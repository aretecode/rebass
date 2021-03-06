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
 * Stylized blockquote element with citation link
 */

var Blockquote = function Blockquote(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var source = _ref.source,
      href = _ref.href,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['source', 'href', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      scale = _config$rebass.scale;

  var sx = {
    root: {
      fontSize: fontSizes[3],
      fontStyle: 'italic',
      margin: 0,
      marginBottom: scale[2]
    },
    p: {
      margin: 0,
      marginBottom: scale[1]
    },
    cite: {
      fontSize: fontSizes[5],
      fontStyle: 'normal'
    },
    source: {
      color: 'inherit'
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      tagName: 'blockquote',
      className: 'Blockquote',
      baseStyle: sx.root }),
    _react2.default.createElement(
      'p',
      { style: sx.p },
      children
    ),
    _react2.default.createElement(
      'cite',
      { style: sx.cite },
      '— ',
      _react2.default.createElement('a', { href: href,
        style: sx.source,
        children: source })
    )
  );
};

Blockquote.propTypes = {
  /** Name of source */
  source: _react2.default.PropTypes.string,
  /** URL link to source */
  href: _react2.default.PropTypes.string
};

exports.default = Blockquote;