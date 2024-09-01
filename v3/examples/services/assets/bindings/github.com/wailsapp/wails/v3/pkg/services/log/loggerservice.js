// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "/wails/runtime.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as slog$0 from "../../../../../../../log/slog/models.js";

/**
 * @param {string} message
 * @param {any[]} args
 * @returns {Promise<void> & { cancel(): void }}
 */
export function Debug(message, ...args) {
    let $resultPromise = /** @type {any} */($Call.ByID(1384012895, message, args));
    return $resultPromise;
}

/**
 * @param {string} message
 * @param {any[]} args
 * @returns {Promise<void> & { cancel(): void }}
 */
export function Error(message, ...args) {
    let $resultPromise = /** @type {any} */($Call.ByID(1324251502, message, args));
    return $resultPromise;
}

/**
 * @param {string} message
 * @param {any[]} args
 * @returns {Promise<void> & { cancel(): void }}
 */
export function Info(message, ...args) {
    let $resultPromise = /** @type {any} */($Call.ByID(3712350036, message, args));
    return $resultPromise;
}

/**
 * Name returns the name of the plugin.
 * You should use the go module format e.g. github.com/myuser/myplugin
 * @returns {Promise<string> & { cancel(): void }}
 */
export function Name() {
    let $resultPromise = /** @type {any} */($Call.ByID(3407342027));
    return $resultPromise;
}

/**
 * @param {slog$0.Level} level
 * @returns {Promise<void> & { cancel(): void }}
 */
export function SetLogLevel(level) {
    let $resultPromise = /** @type {any} */($Call.ByID(2521579448, level));
    return $resultPromise;
}

/**
 * @param {string} message
 * @param {any[]} args
 * @returns {Promise<void> & { cancel(): void }}
 */
export function Warning(message, ...args) {
    let $resultPromise = /** @type {any} */($Call.ByID(2902024404, message, args));
    return $resultPromise;
}