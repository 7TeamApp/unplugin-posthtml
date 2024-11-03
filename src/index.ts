/**
 * This entry file is for exposing the API.
 *
 * @module
 */

import { assign } from '@recursive/assign';
import posthtml from 'posthtml';
import posthtmlrc from 'posthtml-load-config';
import type { UnpluginFactory, UnpluginInstance } from 'unplugin';
import { createUnplugin } from 'unplugin';
import type { Options } from './types';

export const defaultOptions: Options = {
    ctx: { ext: '.html' },
    path: undefined,
    options: {}
};

export const unpluginFactory: UnpluginFactory<Options | undefined> = (
    initialOptions
) => {
    const options = assign(defaultOptions, initialOptions);
    return {
        name: 'unplugin-posthtml',
        transform: (code: string, id: string) =>
            id.endsWith(options.ctx.ext as string)
                ? posthtmlrc(
                      options.ctx,
                      options.path,
                      options.options
                  ).then(({ plugins, options }) =>
                      posthtml(plugins)
                          .process(code, options)
                          .then((result: { html: string }) => ({
                              code: result.html,
                              map: null
                          }))
                  )
                : null
    };
};

export const unplugin: UnpluginInstance<Options | undefined> =
    /* #__PURE__ */ createUnplugin(unpluginFactory);

export default unplugin;
