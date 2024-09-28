declare module 'posthtml-load-config' {
    import type {
        Options as postHtmlOptions,
        Plugin
    } from 'posthtml';

    export interface Context {
        cwd?: string;
        env?: string;
        ext?: string;
        [key: string]: unknown;
    }

    interface Result {
        config: object;
        filePath: string;
    }

    export interface ConfigOptions {
        packageProp?: string | false;
        rc?: string | false;
        js?: string | false;
        rcStrictJson?: boolean;
        rcExtensions?: boolean;
        stopDir?: string;
        cache?: boolean;
        transform?: (result: Result) => Promise<Result> | Result;
        configPath?: string;
        format?: 'json' | 'yaml' | 'js';
    }

    export interface PostHtmlConfig {
        plugins: Plugin<unknown>[];
        options: postHtmlOptions;
    }

    export interface Options {
        ctx: Context;
        path?: string;
        options?: ConfigOptions;
    }

    export function posthtmlrc(
        ctx: Options['ctx'],
        path?: Options['path'],
        options?: Options['options']
    ): Promise<PostHtmlConfig>;

    export default posthtmlrc;
}
