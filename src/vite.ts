/**
 * This entry file is for vite plugin.
 *
 * @module
 */

import { createVitePlugin } from 'unplugin';
import type { Plugin as VitePlugin } from 'vite';
import { unpluginFactory } from './index';
import type { Options } from './types';

type VitePlugins = VitePlugin | VitePlugin[];

const getVitePlugin: (options?: Options) => VitePlugins =
    createVitePlugin(unpluginFactory);
export default getVitePlugin;
