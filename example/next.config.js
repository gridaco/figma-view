const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["figma-view"]);

/**
 * @type {import('next').NextConfig}
 */
const nextconfig = {};

module.exports = withPlugins([withTM], nextconfig);
