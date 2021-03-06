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
 * Breadcrumb navigation links
 */

var Breadcrumbs = function Breadcrumbs(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var links = _ref.links,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['links', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      scale = _config$rebass.scale;

  var sx = {
    root: {
      fontSize: fontSizes[5],
      display: 'flex',
      marginBottom: scale[2],
      alignItems: 'center'
    },
    spacer: {
      marginLeft: '.5em',
      marginRight: '.5em'
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'Breadcrumbs',
      baseStyle: sx.root }),
    links.map(function (link, i) {
      return _react2.default.createElement(
        'div',
        { key: i },
        _react2.default.createElement(_Base2.default, _extends({
          is: 'a'
        }, link, {
          style: {
            color: 'inherit',
            textDecoration: i === links.length - 1 ? 'none' : null
          } })),
        i < links.length - 1 && _react2.default.createElement(
          'span',
          { style: sx.spacer },
          '/'
        )
      );
    })
  );
};

Breadcrumbs.propTypes = {
  /** Array of link props */
  links: _react2.default.PropTypes.array.isRequired
};

Breadcrumbs.defaultProps = {
  links: []
};

Breadcrumbs.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Breadcrumbs;