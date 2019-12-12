module.exports = function () {
    const fs = require('fs');
    const fsEx = require('fs-extra')
    var rimraf = require("rimraf");

    const buildDirectory = 'build/resources/';


    function isDirectory(pathItem) {
        try {
            return fs.statSync(pathItem).isDirectory();
        } catch (e) {
            return false;
        }
    }

    let theme;
    if (process.env.EMA_THEME) {
        theme = process.env.EMA_THEME;
    } else {
        theme = "default";
    }

    if (!isDirectory(buildDirectory)) {
        rimraf.sync(buildDirectory);
        fs.mkdirSync(buildDirectory, {recursive: true});
    }

    try {
        fsEx.copySync('src/theme/' + theme, buildDirectory)
    } catch (error) {
        return console.error('Unable to scan directory. Are-you sure the theme exists? ' + error);
    }
};
