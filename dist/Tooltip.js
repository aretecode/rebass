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
 * Styled tooltip that shows on hover
 */

var Tooltip = function Tooltip(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var title = _ref.title,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['title', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      scale = _config$rebass.scale,
      colors = _config$rebass.colors;

  var css = '\n    .Tooltip_box { display: none }\n    .Tooltip:hover .Tooltip_box { display: block }\n  '.replace(/\n/g, '').replace(/\s\s+/g, ' ');

  var sx = {
    root: {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer'
    },
    box: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      fontSize: fontSizes[6],
      whiteSpace: 'nowrap',
      paddingTop: scale[1] / 2,
      paddingBottom: scale[1] / 2,
      paddingLeft: scale[1],
      paddingRight: scale[1],
      color: colors.white,
      backgroundColor: colors.black,
      transform: 'translate(-50%, -8px)'
    },
    arrow: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      border: '6px solid transparent',
      borderTopColor: colors.black,
      transform: 'translate(-50%, 0)'
    }
  };

  return _react2.default.createElement(
    'span',
    {
      className: 'Tooltip',
      'aria-label': title,
      style: sx.root },
    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
    _react2.default.createElement(
      _Base2.default,
      _extends({}, props, {
        baseStyle: sx.box,
        className: 'Tooltip Tooltip_box' }),
      title,
      _react2.default.createElement('div', { className: 'Tooltip_arrow', style: sx.arrow })
    ),
    children
  );
};

Tooltip.propTypes = {
  /** Text to display in tooltip */
  title: _react2.default.PropTypes.string
};

Tooltip.defaultProps = {
  inverted: true,
  rounded: true
};

Tooltip.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Tooltip;