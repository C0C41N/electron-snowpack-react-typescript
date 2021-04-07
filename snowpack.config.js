/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    'electron-snowpack-plugin',
  ],
  optimize: {
    bundle: true,
    minify: true,
    splitting: true,
    treeshake: true,
  },
  alias: {
    '@services': './src/services',
    '@app': './src',
  },
  buildOptions: {
    baseUrl: './',
  },
  devOptions: {
    open: 'none',
  },
  routes: [],
  packageOptions: {},
};
