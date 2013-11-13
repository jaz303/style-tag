# style-tag

Create `<style>` elements dynamically in the browser.

## Install

    $ npm install style-tag

Use Browserify.

## Usage

    var styletag = require('style-tag');

    // create a <style> tag and return a function for updating the CSS
    // 2nd arg is the initial CSS
    var setter = styletag(document, 'h1 { color: red; }');

    // update the CSS
    setter('h1 { color: green; }');

    // access the actual <style> element itself
    console.log(setter.el);

    // destroy the stylesheet
    setter.destroy();

## License

MIT.