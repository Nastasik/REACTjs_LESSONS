import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import warning from 'warning';
import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.

import noopTheme from './noopTheme'; // Support for the jss-expand plugin.

function arrayMerge(destination, source) {
  return source;
}

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';
  process.env.NODE_ENV !== "production" ? warning(_typeof(stylesOrCreator) === 'object' || themingEnabled, ['Material-UI: the `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n')) : void 0;
  return {
    create: function create(theme, name) {
      var styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        process.env.NODE_ENV !== "production" ? warning(!themingEnabled || theme !== noopTheme, ['Material-UI: the `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n')) : void 0;
        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = _extends({}, styles);

      Object.keys(overrides).forEach(function (key) {
        process.env.NODE_ENV !== "production" ? warning(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n')) : void 0;
        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key], {
          arrayMerge: arrayMerge
        });
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

export default getStylesCreator;