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
 * Full-height banner with styling for background images
 */

var Banner = function Banner(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var align = _ref.align,
      backgroundImage = _ref.backgroundImage,
      props = _objectWithoutProperties(_ref, ['align', 'backgroundImage']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      colors = _config$rebass.colors,
      fontSizes = _config$rebass.fontSizes;

  var alignment = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };

  var alignItems = alignment[align];

  var sx = {
    fontSize: fontSizes[1],
    display: 'flex',
    flexDirection: 'column',
    alignItems: alignItems,
    justifyContent: 'center',
    textAlign: align === 'center' ? 'center' : null,
    padding: scale[4],
    marginBottom: scale[3],
    color: colors.white,
    backgroundColor: colors.primary,
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: backgroundImage ? 'url(' + backgroundImage + ')' : null
  };

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'Banner',
    baseStyle: sx }));
};

Banner.propTypes = {
  /** Horizontal alignment */
  align: _react2.default.PropTypes.oneOf(['left', 'center', 'right']),
  /** Background image source */
  backgroundImage: _react2.default.PropTypes.string
};

Banner.defaultProps = {
  align: 'center'
};

Banner.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Banner;