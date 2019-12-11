module.exports = function () {
    const fs = require('fs');

    let theme;
    if (process.env.EMA_THEME) {
        theme = process.env.EMA_THEME;
    } else {
        theme = "default";
    }

    fs.copyFileSync('src/theme/' + theme + '/variables.scss', 'src/theme/variables.scss');
};
