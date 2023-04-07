export const config = {
    specs: [
        './test/specs/**/*.js',
    ],
    maxInstances: 10,
    capabilities: [
        {
            platfrom: "Windows 10",
            browserName: "Chrome",
            version: "latest",
            project: "WebdriverIO Tests",
            build: `WebdriverIO Build - ${new Date().toJSON()}`
        },
        {
            platform: "Windows 10",
            browserName: "Firefox",
            version: "latest",
            project: "WebdriverIO Tests",
            build: `WebdriverIO Build - ${new Date().toJSON()}`
        },
        {
            platform: "MacOS Ventura",
            browserName: "Safari",
            version: "latest",
            project: "WebdriverIO Tests",
            build: `WebdriverIO Build - ${new Date().toJSON()}`
        }
    ],
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
    waitforTimeout: 100000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}