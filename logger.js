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

        static _externalLog(str, url) {
            url = url.length !== 0 ? url : '';
            let req = new XMLHttpRequest();
            req.open("POST", url, true);
            req.setRrequestHeader("Content-type", "application/x-www-form-urlencoded");
            req.send(str);
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