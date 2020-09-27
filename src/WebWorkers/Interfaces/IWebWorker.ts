export default interface IWebWorker<TIn, TOut> {
    readonly perform: (...params: ReadonlyArray<TIn>) => Promise<TOut>;
    readonly terminate: () => void;
}