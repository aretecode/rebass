'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinkBlock = require('./LinkBlock');

var _LinkBlock2 = _interopRequireDefault(_LinkBlock);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Subcomponent for use in SequenceMap
 */

var SequenceMapStep = function SequenceMapStep(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var width = _ref.width,
      first = _ref.first,
      active = _ref.active,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['width', 'first', 'active', 'children']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      scale = _config$rebass.scale,
      colors = _config$rebass.colors;

  var sx = {
    link: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      lineHeight: 1.25,
      flex: '1 1 ' + width,
      paddingLeft: scale[1],
      paddingRight: scale[1]
    },
    dot: {
      position: 'relative',
      zIndex: 1,
      display: 'inline-block',
      width: scale[2],
      height: scale[2],
      marginBottom: scale[1],
      borderRadius: 99999,
      backgroundColor: 'currentcolor'
    },
    line: {
      position: 'absolute',
      top: scale[2] / 2,
      transform: 'translate(-50%, -50%)',
      left: 0,
      right: 0,
      height: 4,
      backgroundColor: 'currentcolor'
    },
    label: {},
    active: {
      color: colors.primary
    }
  };

  return _react2.default.createElement(
    _LinkBlock2.default,
    _extends({
      _className: 'SequenceMap_Step',
      style: _extends({}, sx.link, active ? sx.active : {})
    }, props),
    _react2.default.createElement('div', { style: sx.dot }),
    !first && _react2.default.createElement('div', { style: sx.line }),
    _react2.default.createElement(
      'div',
      { style: sx.label },
      children
    )
  );
};

SequenceMapStep.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

SequenceMapStep.propTypes = {
  /** Width of step */
  width: _react2.default.PropTypes.string,
  /** Removes line from first step */
  first: _react2.default.PropTypes.bool,
  /** Sets primary color on active step */
  active: _react2.default.PropTypes.bool
};

exports.default = SequenceMapStep;