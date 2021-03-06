'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('./Base');

var _Base2 = _interopRequireDefault(_Base);

var _SequenceMapStep = require('./SequenceMapStep');

var _SequenceMapStep2 = _interopRequireDefault(_SequenceMapStep);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Sequence map pattern for use in multi-step forms
 */

var SequenceMap = function SequenceMap(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var steps = _ref.steps,
      active = _ref.active,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['steps', 'active', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      bold = _config$rebass.bold,
      colors = _config$rebass.colors;

  var chx = _react2.default.Children.map(children, function (child, i) {
    return _react2.default.cloneElement(child, {
      width: 1 / children.length * 100 + '%',
      first: i === 0
    });
  });

  var sx = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    fontSize: fontSizes[5],
    fontWeight: bold,
    color: colors.gray
  };
  var schx = steps.map(function (step, i) {
    return _react2.default.createElement(_SequenceMapStep2.default, _extends({
      key: i,
      first: i === 0,
      width: 100 / steps.length + '%',
      active: i <= active
    }, step));
  });

  return _react2.default.createElement(_Base2.default, _extends({}, props, {
    children: chx || schx,
    className: 'SequenceMap',
    baseStyle: sx }));
};

SequenceMap.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

SequenceMap.propTypes = {
  /** Array of links for each step in the sequence */
  steps: _react2.default.PropTypes.array,
  /** Index of current step */
  active: _react2.default.PropTypes.number
};

SequenceMap.defaultProps = {
  steps: []
};

SequenceMap.Step = _SequenceMapStep2.default;

exports.default = SequenceMap;