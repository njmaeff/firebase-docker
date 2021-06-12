const path = require("path");
module.exports = {
    testEnvironment: 'node',
    globalSetup: path.join(__dirname, 'load-env'),
    testTimeout: 2 * 60 * 1000
}
