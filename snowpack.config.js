/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    'src/renderer': { url: '/' },
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
    '@app': './src/renderer',
  },
  routes: [],
  packageOptions: {},
  devOptions: {},
  buildOptions: {
    baseUrl: './',
  },
};
