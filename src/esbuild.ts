/**
 * This entry file is for esbuild plugin.
 *
 * @module
 */

import type { Plugin as EsbuildPlugin } from 'esbuild';
import { createEsbuildPlugin } from 'unplugin';
import { unpluginFactory } from './index';
import type { Options } from './types';

const getEsbuildPlugin: (options?: Options) => EsbuildPlugin =
    createEsbuildPlugin(unpluginFactory);
export default getEsbuildPlugin;
