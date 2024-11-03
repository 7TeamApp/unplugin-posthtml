/**
 * This entry file is for rspack plugin.
 *
 * @module
 */

import type { RspackPluginInstance } from '@rspack/core';
import { createRspackPlugin } from 'unplugin';
import { unpluginFactory } from './index';
import type { Options } from './types';

const getRspackPlugin: (options?: Options) => RspackPluginInstance =
    createRspackPlugin(unpluginFactory);
export default getRspackPlugin;
