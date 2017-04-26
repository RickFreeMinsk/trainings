(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Logger = factory();
    }
}(this, function () {

    class Logger {
        static log(str, method, ...rest) {
            let funcName = this._selectMethod(method);
            this[funcName](str, rest);
        }

        static _alertLog(str) {
            alert(str);
        }

        static _consoleLog(str) {
            console.log(str);
        }

        static _appendLog(str, selector) {
            selector = selector.length !== 0 ? selector : 'body';
            let wrapper = document.querySelector(selector),
                block = document.createElement('div');


            block.className += 'log-box';
            block.innerHTML = str;
            wrapper.appendChild(block);
        }

        static _externalLog(str) {

        }

        static addLogger(methodName, functionName, callback) {
            this[functionName] = callback;
            methods[methodName] = functionName;
        }

        static _selectMethod(method) {
            return methods[method];
        }
    }

    var methods = {
        'alert': '_alertLog',
        'console': '_consoleLog',
        'window': '_appendLog',
        'external': '_externalLog'
    };

    return Logger;
}));
},{}],2:[function(require,module,exports){
// Used broserify to test CommonJs style
let logger = require('./logger');

logger.log('It works', 'console');
logger.addLogger('consoleDate', '_dateLog', function (str) {
    let current = new Date();
    console.log('Time: ', current, ' text: ', str)
});

logger.log('blablabal', 'consoleDate');



},{"./logger":1}]},{},[2]);
