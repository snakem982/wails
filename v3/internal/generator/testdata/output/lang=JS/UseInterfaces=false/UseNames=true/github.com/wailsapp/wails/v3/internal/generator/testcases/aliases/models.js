// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Create as $Create} from "/wails/runtime.js";

/**
 * A nice type Alias
 * @typedef {number} Alias
 */

/**
 * A struct alias.
 * This should be rendered as a typedef or interface in every mode.
 * @typedef {Object} AliasStruct
 * @property {number[]} Foo - A field with a comment.
 * @property {string} [Bar] - Definitely not Foo.
 * @property {string} [Baz] - Definitely not Foo.
 * @property {OtherAliasStruct} Other - A nested alias struct.
 */

/**
 * An empty struct alias.
 * @typedef { {
 * } } EmptyAliasStruct
 */

/**
 * An empty struct.
 */
export class EmptyStruct {
    /**
     * Creates a new EmptyStruct instance.
     * @param {Partial<EmptyStruct>} [$$source = {}] - The source object to create the EmptyStruct.
     */
    constructor($$source = {}) {

        Object.assign(this, $$source);
    }

    /**
     * Creates a new EmptyStruct instance from a string or object.
     * @param {any} [$$source = {}]
     * @returns {EmptyStruct}
     */
    static createFrom($$source = {}) {
        let $$parsedSource = typeof $$source === 'string' ? JSON.parse($$source) : $$source;
        return new EmptyStruct(/** @type {Partial<EmptyStruct>} */($$parsedSource));
    }
}

/**
 * A generic struct containing an alias
 * @template T
 */
export class GenericPerson {
    /**
     * Creates a new GenericPerson instance.
     * @param {Partial<GenericPerson<T>>} [$$source = {}] - The source object to create the GenericPerson.
     */
    constructor($$source = {}) {
        if (!("Name" in $$source)) {
            /**
             * @member
             * @type {T | null}
             */
            this["Name"] = null;
        }
        if (!("AliasedField" in $$source)) {
            /**
             * @member
             * @type {Alias}
             */
            this["AliasedField"] = 0;
        }

        Object.assign(this, $$source);
    }

    /**
     * Given creation functions for each type parameter,
     * returns a creation function for a concrete instance
     * of the generic class GenericPerson.
     * @template T
     * @param {(source: any) => T} $$createParamT
     * @returns {($$source?: any) => GenericPerson<T>}
     */
    static createFrom($$createParamT) {
        const $$createField0_0 = $$createParamT;
        return ($$source = {}) => {
            let $$parsedSource = typeof $$source === 'string' ? JSON.parse($$source) : $$source;
            if ("Name" in $$parsedSource) {
                $$parsedSource["Name"] = $$createField0_0($$parsedSource["Name"]);
            }
            return new GenericPerson(/** @type {Partial<GenericPerson<T>>} */($$parsedSource));
        };
    }
}

/**
 * Another struct alias.
 * @typedef {Object} OtherAliasStruct
 * @property {number[]} NoMoreIdeas
 */

/**
 * A non-generic struct containing an alias.
 */
export class Person {
    /**
     * Creates a new Person instance.
     * @param {Partial<Person>} [$$source = {}] - The source object to create the Person.
     */
    constructor($$source = {}) {
        if (!("Name" in $$source)) {
            /**
             * The Person's name.
             * @member
             * @type {string}
             */
            this["Name"] = "";
        }
        if (!("AliasedField" in $$source)) {
            /**
             * A random alias field.
             * @member
             * @type {Alias}
             */
            this["AliasedField"] = 0;
        }

        Object.assign(this, $$source);
    }

    /**
     * Creates a new Person instance from a string or object.
     * @param {any} [$$source = {}]
     * @returns {Person}
     */
    static createFrom($$source = {}) {
        let $$parsedSource = typeof $$source === 'string' ? JSON.parse($$source) : $$source;
        return new Person(/** @type {Partial<Person>} */($$parsedSource));
    }
}
