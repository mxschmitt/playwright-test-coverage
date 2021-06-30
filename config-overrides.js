const { override, addBabelPlugins } = require('customize-cra')

module.exports = override(
  process.env.USE_BABEL_PLUGIN_ISTANBUL && addBabelPlugins(
    'babel-plugin-istanbul',
  )
)