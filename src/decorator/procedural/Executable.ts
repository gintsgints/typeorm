import {getMetadataArgsStorage} from "../..";
import {ExecutableMetadataArgs} from "../../metadata-args/ExecutableMetadataArgs";

/**
 * Classes decorated with this decorator will listen to ORM events and their methods will be triggered when event
 * occurs. Those classes must implement EventSubscriberInterface interface.
 */
export function Executable() {
    return function (target: Function) {

        getMetadataArgsStorage().executables.push({
            target: target
        } as ExecutableMetadataArgs);
    };
}