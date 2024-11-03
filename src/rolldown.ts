/**
 * This entry file is for rolldown plugin.
 *
 * @module
 */

import type { Plugin as RolldownPlugin } from 'rolldown/dist/types/plugin';
import { createRolldownPlugin } from 'unplugin';
import { unpluginFactory } from './index';
import type { Options } from './types';

type RolldownPlugins = RolldownPlugin | RolldownPlugin[];

const getRolldownPlugin: (options?: Options) => RolldownPlugins =
    createRolldownPlugin(unpluginFactory);
export default getRolldownPlugin;
