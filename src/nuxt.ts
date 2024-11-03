/**
 * This entry file is for nuxt plugin.
 *
 * @module
 */

import {
    addVitePlugin,
    addWebpackPlugin,
    defineNuxtModule
} from '@nuxt/kit';
import type { Options } from './types';
import vite from './vite';
import webpack from './webpack';
import '@nuxt/schema';
import { defaultOptions } from './index';

export interface ModuleOptions extends Options {
    ctx: Options['ctx'];
}

const nuxtModule: ModuleOptions = defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'nuxt-unplugin-posthtml',
        configKey: 'unpluginPosthtml'
    },
    defaults: defaultOptions,
    setup(options, _nuxt) {
        addVitePlugin(() => vite(options));
        addWebpackPlugin(() => webpack(options));
        // ...
    }
}) as unknown as ModuleOptions;

export default nuxtModule;
