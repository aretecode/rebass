'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Utility for extracting padding props from components
 */

var n = function n(key, x, s) {
  return typeof x === 'number' ? _defineProperty({}, key, s[x]) : null;
};

function padding(props, scale) {
  var s = scale || [];

  var _ref2 = props || {},
      p = _ref2.p,
      px = _ref2.px,
      py = _ref2.py,
      pt = _ref2.pt,
      pr = _ref2.pr,
      pb = _ref2.pb,
      pl = _ref2.pl;

  var result = (0, _objectAssign2.default)({}, n('padding', p, s), n('paddingTop', pt, s), n('paddingBottom', pb, s), n('paddingTop', py, s), n('paddingBottom', py, s), n('paddingLeft', pl, s), n('paddingRight', pr, s), n('paddingLeft', px, s), n('paddingRight', px, s));

  return result;
}

exports.default = padding;