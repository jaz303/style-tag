(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var styletag = require('../');

window.init = function() {

    var s = styletag('h1 { color: green; }');

    document.querySelector('input[name=restyle]').addEventListener('click', function() {
        s.set('h1 { color: red }');
    });

    document.querySelector('input[name=destroy]').addEventListener('click', function() {
        s.destroy();
    });

}
},{"../":2}],2:[function(require,module,exports){
module.exports = function(initialCss, options) {

    if (typeof initialCss === 'object') {
        options = initialCss;
        initialCss = '';
    }

    options = options || {};
    
    var doc     = options.document || document,
        head    = doc.getElementsByTagName('head')[0],
        style   = doc.createElement('style');

    style.type = 'text/css';

    if (options.prepend) {
        head.insertBefore(style, head.childNodes[0]);
    } else {
        head.appendChild(style);    
    }
    
    function set(css) {
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            while (style.childNodes.length) {
                style.removeChild(style.firstChild);
            }
            style.appendChild(doc.createTextNode(css));
        }
    }

    set(initialCss || '');

    style.set = set;
    style.destroy = function() {
        head.removeChild(style);
        style = null;
    }

    return style;

}
},{}]},{},[1])