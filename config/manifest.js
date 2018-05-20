const config = require('./');

module.exports = {
    name: config.APP_NAME,
    short_name: 'React 2018',
    description: 'React Web Template 2018',
    orientation: 'landscape',
    display: 'standalone',
    start_url: '/#/?utm_source=homescreen',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
        {
            src: 'launch-icon.png',
            size: '144x144',
            type: 'image/png',
        },
        {
            src: 'apple-touch-icon.png',
            size: '144x144',
            type: 'image/png',
        },
        {
            src: 'favicon.ico',
            size: '72x72',
            type: 'image/png',
        },
    ],
};
