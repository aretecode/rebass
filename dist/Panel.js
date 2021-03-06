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
 * Panel for containing small pieces of information
 */

var Panel = function Panel(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var theme = _ref.theme,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['theme', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      colors = _config$rebass.colors,
      borderRadius = _config$rebass.borderRadius;

  var borderColor = colors[theme];
  var styledChildren = _react2.default.Children.map(children, function (child) {
    if (child && child.props && child.props.theme === 'default') {
      return _react2.default.cloneElement(child, { theme: theme });
    } else {
      return child;
    }
  });

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    className: 'Panel',
    baseStyle: {
      padding: scale[2],
      marginBottom: scale[2],
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: borderColor,
      borderRadius: borderRadius,
      backgroundColor: colors.white
    },
    children: styledChildren }));
};

Panel.propTypes = {
  /** Sets color from config */
  theme: _react2.default.PropTypes.oneOf(['primary', 'secondary', 'default', 'info', 'success', 'warning', 'error'])
};

Panel.defaultProps = {
  theme: 'default'
};

Panel.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Panel;