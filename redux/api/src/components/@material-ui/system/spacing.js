"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _warning = _interopRequireDefault(require("warning"));

var _responsivePropType = _interopRequireDefault(require("./responsivePropType"));

var _breakpoints = require("./breakpoints");

var _merge = _interopRequireDefault(require("./merge"));

var _memoize = _interopRequireDefault(require("./memoize"));

var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
var aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

var getCssProperties = (0, _memoize.default)(function (prop) {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  var _prop$split = prop.split(''),
      _prop$split2 = (0, _slicedToArray2.default)(_prop$split, 2),
      a = _prop$split2[0],
      b = _prop$split2[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];

function getTransformer(theme) {
  var themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return function (abs) {
      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return function (abs) {
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(abs <= themeSpacing.length - 1, ["@material-ui/system: the value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join('\n')) : void 0;
      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  process.env.NODE_ENV !== "production" ? (0, _warning.default)(false, ["@material-ui/system: the `theme.spacing` value (".concat(themeSpacing, ") is invalid."), 'It should be a number, an array or a function.'].join('\n')) : void 0;
  return function () {
    return undefined;
  };
}

function getValue(transformer, propValue) {
  if (typeof propValue === 'string') {
    return propValue;
  }

  var abs = Math.abs(propValue);
  var transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return "-".concat(transformed);
}

function getStyleFromPropValue(cssProperties, transformer) {
  return function (propValue) {
    return cssProperties.reduce(function (acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}

function spacing(props) {
  var theme = props.theme;
  var transformer = getTransformer(theme);
  return Object.keys(props).map(function (prop) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }

    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return (0, _breakpoints.handleBreakpoints)(props, propValue, styleFromPropValue);
  }).reduce(_merge.default, {});
}

spacing.propTypes = process.env.NODE_ENV !== 'production' ? spacingKeys.reduce(function (obj, key) {
  obj[key] = _responsivePropType.default;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;
var _default = spacing;
exports.default = _default;