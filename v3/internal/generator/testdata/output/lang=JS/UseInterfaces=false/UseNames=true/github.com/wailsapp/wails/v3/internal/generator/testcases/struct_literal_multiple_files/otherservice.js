// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "/wails/runtime.js";

/**
 * @returns {Promise<void> & { cancel(): void }}
 */
export function Hello() {
    let $resultPromise = /** @type {any} */($Call.ByName("main.OtherService.Hello"));
    return $resultPromise;
}
