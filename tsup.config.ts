import type { Options } from 'tsup';

export default (<Options>{
    entryPoints: ['src/**/*.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    cjsInterop: true,
    splitting: true,
    onSuccess: 'bun run build:fix',
    publicDir: './public',
    minify: true,
    minifyWhitespace: true,
    minifyIdentifiers: false,
    minifySyntax: true,
    keepNames: true
});
