import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import { exactProp } from '@material-ui/utils';
import ThemeContext from '../useTheme/ThemeContext';
import useTheme from '../useTheme';
import nested from './nested'; // To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);
    process.env.NODE_ENV !== "production" ? warning(mergedTheme, ['Material-UI: you should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n')) : void 0;
    return mergedTheme;
  }

  return _extends({}, outerTheme, {}, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = useTheme();
  process.env.NODE_ENV !== "production" ? warning(outerTheme !== null || typeof localTheme !== 'function', ['Material-UI: you are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n')) : void 0;
  var theme = React.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return React.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
}

process.env.NODE_ENV !== "production" ? ThemeProvider.propTypes = {
  /**
   * Your component tree
   */
  children: PropTypes.node.isRequired,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
}

export default ThemeProvider;