module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
            launchOptions.args.push('--disable-dev-shm-usage');
        }

        return launchOptions;
    });
}