// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

/**
 * GreetService is great
 * @module
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "/wails/runtime.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

/**
 * Greet does XYZ
 */
export function Greet(name: string): Promise<string> & { cancel(): void } {
    let $resultPromise = $Call.ByName("main.GreetService.Greet", name) as any;
    return $resultPromise;
}

/**
 * NewPerson creates a new person
 */
export function NewPerson(name: string): Promise<$models.Person | null> & { cancel(): void } {
    let $resultPromise = $Call.ByName("main.GreetService.NewPerson", name) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        return $$createType1($result);
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

// Private type creation functions
const $$createType0 = $models.Person.createFrom;
const $$createType1 = $Create.Nullable($$createType0);
