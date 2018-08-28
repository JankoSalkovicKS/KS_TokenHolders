const path = require('path');

module.exports = {
    entry: './web/src/js/appController.js',
    output: {
        path: path.resolve(__dirname, 'web/dist/js'),
        filename: 'bundle.js'
    },
    mode: 'development'
}