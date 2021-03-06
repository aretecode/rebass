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
 * Table element with simplified props
 */

var Table = function Table(_ref, _ref2) {
  var rebass = _ref2.rebass;

  var headings = _ref.headings,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, ['headings', 'data']);

  var _config$rebass = _extends({}, _config2.default, rebass),
      fontSizes = _config$rebass.fontSizes,
      scale = _config$rebass.scale,
      borderColor = _config$rebass.borderColor;

  var sx = {
    root: {
      maxWidth: '100%',
      overflowX: 'scroll',
      marginBottom: scale[2],
      borderColor: borderColor
    },
    table: {
      fontSize: fontSizes[5],
      lineHeight: 1.25,
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%'
    },
    thead: {},
    tbody: {},
    tr: {},
    th: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      padding: scale[1],
      paddingLeft: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderColor: 'inherit'
    },
    td: {
      padding: scale[1],
      paddingLeft: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'inherit'
    }
  };

  return _react2.default.createElement(
    _Base2.default,
    _extends({}, props, {
      className: 'Table',
      baseStyle: sx.root }),
    _react2.default.createElement(
      'table',
      { style: sx.table },
      _react2.default.createElement(
        'thead',
        { style: sx.thead },
        _react2.default.createElement(
          'tr',
          { style: sx.tr },
          headings.map(function (heading, i) {
            return _react2.default.createElement('th', { key: i,
              style: sx.th,
              children: heading });
          })
        )
      ),
      _react2.default.createElement(
        'tbody',
        { style: sx.tbody },
        data.map(function (row, i) {
          return _react2.default.createElement(
            'tr',
            { key: i,
              style: sx.tr },
            row.map(function (datum, j) {
              return _react2.default.createElement('td', { key: j,
                style: sx.td,
                children: datum });
            })
          );
        })
      )
    )
  );
};

Table.propTypes = {
  /** Headings for <th> */
  headings: _react2.default.PropTypes.array,
  /** Array of table row data for <td> */
  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.array)
};

Table.defaultProps = {
  headings: [],
  data: []
};

Table.contextTypes = {
  rebass: _react2.default.PropTypes.object
};

exports.default = Table;