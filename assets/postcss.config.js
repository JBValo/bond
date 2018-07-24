module.exports = {
    plugins: [
        require('postcss-import')({}),
        require('postcss-mixins')({}),
        require('postcss-nested')({}),
        require('postcss-simple-vars')({}),
        require('postcss-responsive-type')({}),
        require('postcss-color-function')({}),
    ]
};

var critical = require('critical');

critical.generate({
    base: '../',
    src: 'index.html',
    dest: 'assets/css/style.min.css',
    minify: true,
    width: 1300,
    height: 900
});
