// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

/**
 * SomeMethods exports some methods.
 * @module
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "/wails/runtime.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

/**
 * LikeThisOne is an example method that does nothing.
 */
export function LikeThisOne(): Promise<[$models.Person, $models.Impersonator, $models.HowDifferent<boolean>, $models.PrivatePerson]> & { cancel(): void } {
    let $resultPromise = $Call.ByName("github.com/wailsapp/wails/v3/internal/generator/testcases/no_bindings_here.SomeMethods.LikeThisOne") as any;
    let $typingPromise = $resultPromise.then(($result) => {
        $result[0] = $$createType0($result[0]);
        $result[1] = $$createType1($result[1]);
        $result[2] = $$createType2($result[2]);
        $result[3] = $$createType3($result[3]);
        return $result;
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

/**
 * LikeThisOtherOne does nothing as well, but is different.
 */
export function LikeThisOtherOne(): Promise<void> & { cancel(): void } {
    let $resultPromise = $Call.ByName("github.com/wailsapp/wails/v3/internal/generator/testcases/no_bindings_here.SomeMethods.LikeThisOtherOne") as any;
    return $resultPromise;
}

// Private type creation functions
const $$createType0 = $models.Person.createFrom;
const $$createType1 = $models.Impersonator.createFrom;
const $$createType2 = $models.HowDifferent.createFrom($Create.Any);
const $$createType3 = $models.PrivatePerson.createFrom;
