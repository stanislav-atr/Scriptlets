/* eslint-disable no-console, func-names, no-multi-assign */
import { hit, log } from '../helpers';

/**
 * Sets static properties PopAds and popns.
 *
 * @param {Source} source
 */
export function setPopadsDummy(source) {
    delete window.PopAds;
    delete window.popns;
    Object.defineProperties(window, {
        PopAds: {
            get: () => {
                hit(source);
                log(source);
                return {};
            },
        },
        popns: {
            get: () => {
                hit(source);
                log(source);
                return {};
            },
        },
    });
}

setPopadsDummy.names = [
    'set-popads-dummy',
    'popads-dummy.js',
];

setPopadsDummy.injections = [hit, log];
