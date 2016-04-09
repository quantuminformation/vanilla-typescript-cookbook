var stealTools = require("steal-tools");

var promise = stealTools.build({
  main: "app/router",
  config: __dirname + "/package.json!npm"
}, {
  // the following are the default values, so you don't need
  // to write them.
  minify: true,
  debug: true,
  bundleSteal: true,
});
