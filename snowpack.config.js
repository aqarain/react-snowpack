/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist"
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-typescript"],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
  alias: {
    app: "./src/app",
    store: "./src/store",
    services: "./src/services",
    utils: "./src/utils",
    styles: "./src/styles",
    assets: "./src/assets",
    libs: "./src/libs"
  }
};
