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