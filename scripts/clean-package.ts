import Bun from 'bun';

const pg = await Bun.file('./package.json').json();

pg.scripts = undefined;
pg.devDependencies = undefined;

await Bun.write('./package.json', JSON.stringify(pg));
