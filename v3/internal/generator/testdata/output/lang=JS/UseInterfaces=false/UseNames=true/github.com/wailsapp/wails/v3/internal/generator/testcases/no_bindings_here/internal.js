// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Create as $Create} from "/wails/runtime.js";

export class personImpl {
    /**
     * Creates a new personImpl instance.
     * @param {Partial<personImpl>} [$$source = {}] - The source object to create the personImpl.
     */
    constructor($$source = {}) {
        if (!("Nickname" in $$source)) {
            /**
             * Nickname conceals a person's identity.
             * @member
             * @type {string}
             */
            this["Nickname"] = "";
        }
        if (!("Name" in $$source)) {
            /**
             * They have a name.
             * @member
             * @type {string}
             */
            this["Name"] = "";
        }

        Object.assign(this, $$source);
    }

    /**
     * Creates a new personImpl instance from a string or object.
     * @param {any} [$$source = {}]
     * @returns {personImpl}
     */
    static createFrom($$source = {}) {
        let $$parsedSource = typeof $$source === 'string' ? JSON.parse($$source) : $$source;
        return new personImpl(/** @type {Partial<personImpl>} */($$parsedSource));
    }
}
