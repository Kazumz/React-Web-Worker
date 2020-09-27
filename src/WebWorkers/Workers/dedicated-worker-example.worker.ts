import IExampleInterface from "../../Interfaces/IExampleInterface";
import IWebWorker from "../Interfaces/IWebWorker";

// Importing this is proof when we create our separate Worker bundle, we can reuse code from our solution.
import burnCpu from "../../Utilities/burn-cpu";

export async function perform(...params: ReadonlyArray<{}>): Promise<ReadonlyArray<IExampleInterface>> {
    // You could do anything you like here.
    // Expensive client side action?
    // XHR request?
    // Up to you ... as this is promise based it can support practically anything.

    // Simulate a 10s delay to ensure it doesn't affect our React Application.
    burnCpu(10000);

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
} as IWebWorker<{}, ReadonlyArray<IExampleInterface>>;