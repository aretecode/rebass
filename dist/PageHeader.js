'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('./Base');

var _Base2 = _interopRequireDefault(_Base);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Main page header with description
 */

var PageHeader = function PageHeader(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var heading = _ref.heading,
      description = _ref.description,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['heading', 'description', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      borderColor = _config$rebass.borderColor;

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      tagName: 'header',
      className: 'PageHeader',
      baseStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingTop: scale[3],
        paddingBottom: scale[2],
        marginTop: scale[4],
        marginBottom: scale[4],
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderColor: borderColor
      } }),
    _react2.default.createElement(
      'div',
      { style: { flex: '1 1 auto' } },
      _react2.default.createElement(_Heading2.default, { level: 1, children: heading }),
      description && _react2.default.createElement(_Text2.default, { children: description })
    ),
    children
  );
};

PageHeader.propTypes = {
  /** Page heading */
  heading: _react2.default.PropTypes.string,
  /** Description of page */
  description: _react2.default.PropTypes.string
};

PageHeader.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = PageHeader;