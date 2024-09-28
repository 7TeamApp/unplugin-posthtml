import type posthtml from 'posthtml';
import type { Options as PostHtmlOptions } from 'posthtml-load-config';

export interface PostHtmlConfig {
    parser?: string;
    from?: string;
    to?: string;
    render?: string;
    plugins?: posthtml.Plugin<unknown>[];
}

export type Options = PostHtmlOptions;
