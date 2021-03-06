'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _margins = require('./util/margins');

var _margins2 = _interopRequireDefault(_margins);

var _padding = require('./util/padding');

var _padding2 = _interopRequireDefault(_padding);

var _radii = require('./util/radii');

var _radii2 = _interopRequireDefault(_radii);

var _colorStyle = require('./util/color-style');

var _colorStyle2 = _interopRequireDefault(_colorStyle);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Base component is internally used by all other Rebass components
 * and provides an API to apply padding, margin, color, background-color,
 * border-radius and other styles to any component.
 * All props for the Base component are available to other Rebass components to help with contextual styling.
 * It is not intended for use directly, but it can be used to create other custom components.
 */

var Base = function (_React$Component) {
  _inherits(Base, _React$Component);

  function Base(props, _ref) {
    var rebass = _ref.rebass;

    _classCallCheck(this, Base);

    var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this));

    var _config$rebass = _extends({}, _config2.default, rebass),
        pureRender = _config$rebass.pureRender;

    if (pureRender) {
      _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_this);
    }
    return _this;
  }

  _createClass(Base, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          is = _props.is,
          tagName = _props.tagName,
          baseStyle = _props.baseStyle,
          style = _props.style,
          baseRef = _props.baseRef,
          props = _objectWithoutProperties(_props, ['is', 'tagName', 'baseStyle', 'style', 'baseRef']);

      var rebass = this.context.rebass;

      var _config$rebass2 = _extends({}, _config2.default, rebass),
          scale = _config$rebass2.scale,
          colors = _config$rebass2.colors,
          borderRadius = _config$rebass2.borderRadius;

      var name = props.className;
      var keys = name ? name.split(' ') : [];
      var contextStyle = keys.reduce(function (a, key) {
        return (0, _objectAssign2.default)(a, rebass ? rebass[key] : {});
      }, {});

      var Component = is || props.Component || tagName || 'div';

      var p = props.p,
          pt = props.pt,
          pr = props.pr,
          pb = props.pb,
          pl = props.pl,
          px = props.px,
          py = props.py,
          m = props.m,
          mt = props.mt,
          mr = props.mr,
          mb = props.mb,
          ml = props.ml,
          mx = props.mx,
          my = props.my,
          rounded = props.rounded,
          pill = props.pill,
          circle = props.circle,
          theme = props.theme,
          color = props.color,
          backgroundColor = props.backgroundColor,
          inverted = props.inverted,
          elementProps = _objectWithoutProperties(props, ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'rounded', 'pill', 'circle', 'theme', 'color', 'backgroundColor', 'inverted']);

      var sx = (0, _objectAssign2.default)({ boxSizing: 'border-box' }, baseStyle, contextStyle, (0, _margins2.default)({ m: m, mt: mt, mr: mr, mb: mb, ml: ml, mx: mx, my: my }, scale), (0, _padding2.default)({ p: p, pt: pt, pr: pr, pb: pb, pl: pl, px: px, py: py }, scale), (0, _colorStyle2.default)({ theme: theme, color: color, backgroundColor: backgroundColor, inverted: inverted }, colors, rebass), (0, _radii2.default)({ rounded: rounded, pill: pill, circle: circle }, borderRadius), style);

      return _react2.default.createElement(Component, _extends({}, elementProps, {
        ref: function ref(_ref2) {
          return baseRef(_ref2);
        },
        style: sx }));
    }
  }]);

  return Base;
}(_react2.default.Component);

Base.contextTypes = {
  rebass: _react2.default.PropTypes.object
};
Base.defaultProps = {
  baseRef: function baseRef(x) {
    return x;
  }
};
Base.propTypes = {
  /** HTML element string or React component to render */
  tagName: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func, _react2.default.PropTypes.element]),
  /** Used to pull styles from the rebass context object */
  className: _react2.default.PropTypes.string,
  /** Base component styles */
  baseStyle: _react2.default.PropTypes.object,
  /** Styles from component instance - overrides base and context styles */
  style: _react2.default.PropTypes.object,
  /** Function to obtain refs for the underlying Base component */
  baseRef: _react2.default.PropTypes.func,

  /** Applies margin with the margin utility based on the spacing scale */
  m: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top based on the spacing scale */
  mt: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin right based on the spacing scale */
  mr: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin bottom based on the spacing scale */
  mb: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left based on the spacing scale */
  ml: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left and right based on the spacing scale */
  mx: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top and bottom based on the spacing scale */
  my: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Applies padding with the padding utility based on the spacing scale */
  p: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top based on the spacing scale */
  pt: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding right based on the spacing scale */
  pr: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding bottom based on the spacing scale */
  pb: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left based on the spacing scale */
  pl: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left and right based on the spacing scale */
  px: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top and bottom based on the spacing scale */
  py: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Text color - can either be a key from the config colors object or any color value */
  color: _react2.default.PropTypes.string,
  /** Background color - can either be a key from the config colors object or any color value */
  backgroundColor: _react2.default.PropTypes.string,
  /** Sets color from config */
  theme: _react2.default.PropTypes.oneOf(['primary', 'secondary', 'default', 'info', 'success', 'warning', 'error']),
  /** Inverts colors from theme */
  inverted: _react2.default.PropTypes.bool,
  /** Controls border radius */
  rounded: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])]),
  /** Sets border radius 99999 */
  circle: _react2.default.PropTypes.bool,
  /** Sets border radius 99999 */
  pill: _react2.default.PropTypes.bool
};
exports.default = Base;