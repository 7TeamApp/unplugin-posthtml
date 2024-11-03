import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import Bun from 'bun';
import chalk from 'chalk';
import fg from 'fast-glob';

const cjsFilePaths = await fg('*.cjs', {
    ignore: ['chunk-*'],
    absolute: true,
    cwd: resolve(dirname(fileURLToPath(import.meta.url)), '../dist')
});

for await (const cjsFilePath of cjsFilePaths) {
    console.log(
        chalk.cyan.inverse(' POST '),
        `Fix ${basename(cjsFilePath)}`
    );
    let cjsFile = await Bun.file(cjsFilePath).text();

    cjsFile = cjsFile.replace(
        /\s*exports\.default\s*=\s*/g,
        'module.exports='
    );
    cjsFile = cjsFile.replace(
        /\s*module\.exports\s*=\s*exports\.default\s*;/g,
        ''
    );
    cjsFile += 'exports.default=module.exports;';
    await Bun.write(cjsFilePath, cjsFile);
}
