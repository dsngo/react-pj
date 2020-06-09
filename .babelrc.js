const plugins = ["@babel/plugin-proposal-class-properties"];

const presets = [
  "@babel/preset-react",
  "@babel/preset-env",
  "@babel/preset-typescript",
  [("@emotion/babel-preset-css-prop", { sourceMap: false })],
];

module.exports = { plugins, presets };
