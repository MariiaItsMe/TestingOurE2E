export const config = {
    specs: [
        './test/specs/**/*.js',
    ],
    maxInstances: 10,
    capabilities: [{
        "browserName": "Chrome",
        "browserVersion": "latest",
        "LT:Options": {
            user: process.env.LT_USERNAME,
            key: process.env.LT_ACCESS_KEY,
            "platformName": "Windows 10",
            "build": `WebdriverIO Build - ${new Date().toJSON()}`,
            "project": "WebdriverIO Tests",
            "w3c": true,
            "plugin": "node_js-webdriverio"
        }
    }],
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    logFile: './logDir/api.log',
    services: [
        ['lambdatest', {
            tunnel: false
        }]
    ],
    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
