"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StylesContext = exports.sheetsManager = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _warning = _interopRequireDefault(require("warning"));

var _utils = require("@material-ui/utils");

var _createGenerateClassName = _interopRequireDefault(require("../createGenerateClassName"));

var _jss = require("jss");

var _jssPreset = _interopRequireDefault(require("../jssPreset"));

// Default JSS instance.
var jss = (0, _jss.create)((0, _jssPreset.default)()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = (0, _createGenerateClassName.default)(); // Exported for test purposes

var sheetsManager = new Map();
exports.sheetsManager = sheetsManager;
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss,
  sheetsCache: null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};

var StylesContext = _react.default.createContext(defaultOptions);

exports.StylesContext = StylesContext;
var injectFirstNode;

function StylesProvider(props) {
  var children = props.children,
      _props$injectFirst = props.injectFirst,
      injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
      _props$disableGenerat = props.disableGeneration,
      disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
      localOptions = (0, _objectWithoutProperties2.default)(props, ["children", "injectFirst", "disableGeneration"]);

  var outerOptions = _react.default.useContext(StylesContext);

  var context = (0, _extends2.default)({}, outerOptions, {
    disableGeneration: disableGeneration
  }, localOptions);
  process.env.NODE_ENV !== "production" ? (0, _warning.default)(typeof window !== 'undefined' || context.sheetsManager, 'Material-UI: you need to use the ServerStyleSheets API when rendering on the server.') : void 0;
  process.env.NODE_ENV !== "production" ? (0, _warning.default)(!context.jss.options.insertionPoint || !injectFirst, 'Material-UI: you cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.') : void 0;
  process.env.NODE_ENV !== "production" ? (0, _warning.default)(!injectFirst || !localOptions.jss, 'Material-UI: you cannot use the jss and injectFirst props at the same time.') : void 0;

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = (0, _jss.create)({
      plugins: (0, _jssPreset.default)().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return _react.default.createElement(StylesContext.Provider, {
    value: context
  }, children);
}

process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: _propTypes.default.bool,

  /**
   * JSS's class name generator.
   */
  generateClassName: _propTypes.default.func,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: _propTypes.default.bool,

  /**
   * JSS's instance.
   */
  jss: _propTypes.default.object,

  /**
   * @ignore
   */
  serverGenerateClassName: _propTypes.default.func,

  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: _propTypes.default.object,

  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: _propTypes.default.object,

  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: _propTypes.default.object
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = (0, _utils.exactProp)(StylesProvider.propTypes) : void 0;
}

var _default = StylesProvider;
exports.default = _default;