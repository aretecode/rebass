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
 * Media object with vertical alignment using flexbox
 */

var Media = function Media(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var img = _ref.img,
      right = _ref.right,
      align = _ref.align,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['img', 'right', 'align', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale;

  var alignment = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end'
  };

  var alignItems = alignment[align];

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'Media',
      baseStyle: {
        display: 'flex',
        marginBottom: scale[2],
        alignItems: alignItems
      } }),
    _react2.default.createElement('img', { src: img,
      style: {
        flex: 'none',
        maxWidth: 'none',
        marginRight: right ? 0 : scale[2],
        marginLeft: right ? scale[2] : 0,
        order: right ? 9999 : null
      } }),
    _react2.default.createElement('div', { children: children })
  );
};

Media.propTypes = {
  /** Image source */
  img: _react2.default.PropTypes.string,
  /** Displays image to the right */
  right: _react2.default.PropTypes.bool,
  /** Vertical alignment */
  align: _react2.default.PropTypes.oneOf(['top', 'center', 'bottom'])
};

Media.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Media;