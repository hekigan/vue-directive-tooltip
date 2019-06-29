const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs-extra');

const DOCS_Folder = 'docs';

return (async () => {
    try {
        console.log(`Compiling library\n`);

        const indexPath = path.join('src', 'index.js');
        const { stdout, stderr } = await exec(`vue build --target lib --name vueDirectiveTooltip ${indexPath}`);
        // console.log('stdout:', stdout);
        if (stderr) {
            console.log(stderr);
        }

        // copy "umd" files and remove the "umd" part of the filename
        await fs.copy(path.join('dist', 'vueDirectiveTooltip.umd.js'), path.join('dist', 'vueDirectiveTooltip.js'));
        await fs.copy(path.join('dist', 'vueDirectiveTooltip.umd.js.map'), path.join('dist', 'vueDirectiveTooltip.js.map'));
        await fs.copy(path.join('dist', 'vueDirectiveTooltip.umd.min.js'), path.join('dist', 'vueDirectiveTooltip.min.js'));
        await fs.copy(path.join('dist', 'vueDirectiveTooltip.umd.min.js.map'), path.join('dist', 'vueDirectiveTooltip.min.js.map'));

        console.log(`Library compiled in the <dist> folder\n`);
    } catch (err) {
        console.error(err);
    }
})();