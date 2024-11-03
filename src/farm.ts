/**
 * This entry file is for farm plugin.
 *
 * @module
 */

import type { UserConfig } from '@farmfe/core';
import { createFarmPlugin } from 'unplugin';
import { unpluginFactory } from './index';
import type { Options } from './types';

type FarmPlugins = UserConfig['plugins'];
type FarmPlugin = NonNullable<FarmPlugins>[number];

const getFarmPlugin: (options?: Options) => FarmPlugin =
    createFarmPlugin(unpluginFactory);
export default getFarmPlugin;
