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

/**
 * Section element with vertical padding
 */

var Section = function Section(props, _ref) {
  var rebass = _ref.rebass;

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale;

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    tagName: 'section',
    className: 'Section',
    baseStyle: {
      paddingTop: scale[4],
      paddingBottom: scale[4]
    } }));
};

Section.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Section;