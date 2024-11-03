/**
 * This entry file is for rollup plugin.
 *
 * @module
 */

import type { InputPluginOption } from 'rollup';
import { createRollupPlugin } from 'unplugin';
import { unpluginFactory } from './index';
import type { Options } from './types';

const getRollupPlugin: (options?: Options) => InputPluginOption =
    createRollupPlugin(unpluginFactory);
export default getRollupPlugin;
