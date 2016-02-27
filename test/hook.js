
const hook = require('css-modules-require-hook');

hook({
    extensions: [ '.css' ]
});

// const jsdom = require('jsdom');
// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = document.defaultView;
// global.navigator = {userAgent: 'node.js'};
