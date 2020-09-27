import IPokemon from "../../Interfaces/IPokemon";
import IWebWorker from "../Interfaces/IWebWorker";

export async function perform(...params: ReadonlyArray<{}>): Promise<ReadonlyArray<IPokemon>> {
    // You could do anything you like here.
    // Expensive client side action?
    // XHR request?
    // Up to you ... as this is promise based it can support practically anything.
    return Promise.resolve([
        {
            name: 'InsertBadNameHere'
        }
    ]);
}

// Frustratingly, TypeScript lets us down here.
// Even though we're absolutely exporting a specific type using assertion here,
// the outside where we use this doesn't receive the correct type.
// Certainly one to investigate one day! Can we do this better or in a way TS understands?
export default {
    perform
} as IWebWorker<{}, ReadonlyArray<IPokemon>>;