# style-tag

Create `<style>` elements dynamically in the browser.

## Install

    $ npm install style-tag

Use Browserify.

## Usage

    var styletag = require('style-tag');

    // create a <style> tag and return it
    // Arg is the initial CSS
    var tag = styletag('h1 { color: red; }');

    // update the CSS
    tag.set('h1 { color: green; }');

    // destroy the stylesheet
    tag.destroy();

## License

MIT.