/**
 * This entry file is for webpack plugin.
 *
 * @module
 */

import { createWebpackPlugin } from 'unplugin';
import type { WebpackPluginInstance } from 'webpack';
import { unpluginFactory } from './index';
import type { Options } from './types';

const getWebpackPlugin: (options?: Options) => WebpackPluginInstance =
    createWebpackPlugin(unpluginFactory);
export default getWebpackPlugin;
