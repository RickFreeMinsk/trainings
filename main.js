// Used broserify to test CommonJs style
let logger = require('./logger');

logger.log('It works', 'console');
logger.addLogger('consoleDate', '_dateLog', function (str) {
    let current = new Date();
    console.log('Time: ', current, ' text: ', str)
});

logger.log('blablabal', 'consoleDate');


