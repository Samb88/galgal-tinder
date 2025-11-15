// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add resolver configuration to handle Node.js polyfills
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    ...config.resolver.extraNodeModules,
    // Provide mocks for Node.js modules not available in React Native
    punycode: path.resolve(__dirname, 'metro-punycode-mock.js'),
    'webidl-conversions': path.resolve(__dirname, 'metro-webidl-conversions-mock.js'),
  },
};

module.exports = config;

