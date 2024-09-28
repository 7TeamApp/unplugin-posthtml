# unplugin-posthtml

**[Unplugin](https://github.com/unjs/unplugin) integration for PostHTML across multiple bundlers.**

## Description

`unplugin-posthtml` is a versatile plugin that seamlessly integrates [PostHTML](https://github.com/posthtml/posthtml) with various JavaScript bundlers, including Vite, Webpack, Rollup, Esbuild, Farm, Rolldown, and Rspack. Enhance your HTML processing workflow by leveraging the power of PostHTML plugins within your preferred bundler environment.

## Features

- **Multi-Bundler Support**: Compatible with Vite, Webpack, Rollup, Esbuild, Farm, Rolldown, and Rspack.
- **Flexible Configuration**: Easily customize PostHTML plugins to fit your project's needs.
- **TypeScript Ready**: Built with TypeScript for type safety and better developer experience.
- **Extensible**: Add and configure your own PostHTML plugins effortlessly.

## Installation

Use your preferred package manager to install `unplugin-posthtml` along with its peer dependencies.

### Using npm

```bash
npm install unplugin-posthtml
```

### Using pnpm

```bash
pnpm install unplugin-posthtml
```

### Using yarn

```bash
yarn add unplugin-posthtml
```

### Using bun

```bash
bun add unplugin-posthtml
```

## Usage

<!-- markdownlint-disable MD033 -->
<details><summary><h2>Vite</h2></summary>

```typescript
// vite.config.ts
import posthtml from "unplugin-posthtml/vite";
import { defineConfig } from "vite";

export default defineConfig({
    // ...other configurations
    plugins: [
        posthtml()
    ]
});
```

</details>

<!-- markdownlint-disable MD033 -->
<details><summary><h2>webpack</h2></summary>

```javascript
// webpack.config.js
module.exports = {
    // ...other configurations
    plugins: [
        require('unplugin-posthtml/webpack')({
            // posthtml config
    })
  ]
}
```

</details>

<!-- markdownlint-disable MD033 -->
<details><summary><h2>Rollup</h2></summary>

```javascript
// rollup.config.js
import posthtml from "unplugin-posthtml/rollup";

export default {
    // ...other configurations
    plugins: [
        posthtml()
    ]
};
```

</details>

<!-- markdownlint-disable MD033 -->
<details><summary><h2>esbuild</h2></summary>

```typescript
// esbuild.config.ts
import { build } from "esbuild";
import posthtml from "unplugin-posthtml/esbuild";

build({
    // ...other configurations
    plugins: [
        posthtml()
    ]
});
```

</details>

<!-- markdownlint-disable MD033 -->
<details><summary><h2>Farm</h2></summary>

```typescript
// farm.config.ts
import { defineConfig } from "@farmfe/core";
import posthtml from "unplugin-posthtml/farm";

export default defineConfig({
    // ...other configurations
    plugins: [
        posthtml()
    ]
});
```

</details>

<!-- markdownlint-disable MD033 -->
<details><summary><h2>Rolldown</h2></summary>

```typescript
// rolldown.config.ts
import posthtml from "unplugin-posthtml/rolldown";

export default {
    // ...other configurations
    plugins: [
        posthtml()
    ]
};
```

</details>

<!-- markdownlint-disable MD033 -->
<details><summary><h2>Rspack</h2></summary>

```typescript
// rspack.config.ts
module.exports = {
    // ...other configurations
    plugins: [
        require('unplugin-posthtml/rspack')({
            // posthtml config
    })
  ]
}
```

</details>

<!-- markdownlint-disable MD033 -->
<details><summary><h2>Vue-CLI</h2></summary>

```typescript
// vue.config.js
module.exports = {
    // ...other configurations
    configureWebpack: {
        plugins: [
            require('unplugin-posthtml/webpack')({
                // posthtml config
            })
        ]
    }
}
```

</details>

<!-- markdownlint-disable MD033 -->
<details><summary><h2>Nuxt</h2></summary>

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
    // ...other configurations
    modules: [
        ['unplugin-posthtml/nuxt', ]
  ]
})
```

</details>

<!-- markdownlint-disable MD033 -->
<details><summary><h2>Astro</h2></summary>

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config'
import posthtml from 'unplugin-posthtml/astro'

// https://astro.build/config
export default defineConfig({
    // ...other configurations
    integrations: [
        posthtml()
    ]
})
```

</details>

## postHTML config

```javascript
// posthtml.config.js
module.exports = () => ({
    plugins: {
        // plugins config
        'posthtml-include': { root: 'src' } // example plugin
    }
});
```
