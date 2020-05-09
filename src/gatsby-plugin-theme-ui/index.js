import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import merge from "lodash.merge"
import "typeface-roboto-mono"
// lodash.merge will deeply merge custom values with the
// blog theme's defaults
export default merge({}, baseTheme, {
  colors: {
    text: "#050709",
    primary: "#050709",
    background: "#fff",
  },
  fonts: {
    body: "'Roboto Mono', system-ui, sans-serif",
    heading: "'Roboto Mono', system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
})
