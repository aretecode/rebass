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
 * Star rating component with clickable buttons
 */

var Rating = function Rating(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var value = _ref.value,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['value', 'onClick']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      colors = _config$rebass.colors;

  var stars = Array.from({ length: 5 }, function (a, b) {
    return b;
  });

  var sx = {
    root: {
      display: 'inline-flex',
      fontSize: fontSizes[4]
    },
    star: {
      position: 'relative',
      fontSize: 'inherit',
      lineHeight: 1,
      margin: 0,
      marginRight: '.25em',
      padding: '.25em 0',
      border: 0,
      color: 'inherit',
      backgroundColor: 'transparent',
      cursor: onClick ? 'pointer' : null
    }
  };

  var getEmptyStyle = function getEmptyStyle(i) {
    var active = i < value;
    var color = active ? null : colors.gray;
    return { color: color };
  };

  var getActiveStyle = function getActiveStyle(i) {
    var active = i < value;
    var display = active ? null : 'none';
    var clip = value > i && value < i + 1 ? 'rect(0, .5em, 1em, 0)' : null;

    return {
      position: 'absolute',
      top: '.25em',
      left: 0,
      display: display,
      clip: clip
    };
  };

  var handleClick = function handleClick(i) {
    return function (e) {
      if (onClick) {
        onClick(i + 1);
      }
    };
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'Rating',
      baseStyle: sx.root }),
    stars.map(function (s) {
      return _react2.default.createElement(
        'button',
        {
          key: s,
          style: sx.star,
          onClick: handleClick(s) },
        _react2.default.createElement(
          'span',
          { style: getEmptyStyle(s) },
          '\u2606 '
        ),
        _react2.default.createElement(
          'span',
          { style: getActiveStyle(s) },
          '\u2605'
        )
      );
    })
  );
};

Rating.propTypes = {
  /** Number of star rating from 1 to 5 */
  value: _react2.default.PropTypes.number,
  /** Click handler - returns index of star clicked */
  onClick: _react2.default.PropTypes.func
};

Rating.defaultProps = {
  value: 0,
  color: 'orange'
};

Rating.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Rating;