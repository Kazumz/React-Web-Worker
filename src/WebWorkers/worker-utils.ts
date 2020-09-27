import IWebWorker from "./Interfaces/IWebWorker";

export default function createWorker<TIn, TOut>(webWorker: IWebWorker<TIn, TOut>): IWebWorker<TIn, TOut> {
    // A bit crude, but necessary to instantiate the Web Worker.
    return (webWorker as any)();
}