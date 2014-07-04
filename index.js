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