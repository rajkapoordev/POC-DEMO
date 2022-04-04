const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

module.exports = (config, context) => {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'remote',
        filename: 'remoteEntry.js',
        exposes: {
          './RemoteEntry': './src/app/components/RemoteEntry',
          './Billing': './src/app/pages/Billing/Billing',
          './Client': './src/app/pages/Client/Client',
          './Report': './src/app/pages/Report/Report',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
    ],
  };
};