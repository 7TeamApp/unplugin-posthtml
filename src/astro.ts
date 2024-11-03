/**
 * This entry file is for astro integration.
 *
 * @module
 */

import type { AstroIntegration } from 'astro';
import unplugin from './index';
import type { Options } from './types';

const getAstroIntegration: (options?: Options) => AstroIntegration = (
    options?: Options
): any => ({
    name: 'unplugin-posthtml',
    hooks: {
        'astro:config:setup': async (astro: any) => {
            astro.config.vite.plugins ||= [];
            astro.config.vite.plugins.push(unplugin.vite(options));
        }
    }
});

export default getAstroIntegration;
