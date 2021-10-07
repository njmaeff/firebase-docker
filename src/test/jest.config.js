const path = require("path");
const esModules = [].join("|");

module.exports = {
    testEnvironment: 'node',
    globalSetup: path.join(__dirname, 'load-env'),
    testTimeout: 60 * 1000, // 1 minute
    testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`, `.js$`],
    modulePathIgnorePatterns: [".tmp", "out"],
    rootDir: __dirname,
    preset: "ts-jest",
    // preset: "ts-jest/presets/js-with-ts",
}
