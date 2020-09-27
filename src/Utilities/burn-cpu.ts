export default function burnCpu(time: number): number {
    const now: number = Date.now();

    let count: number = 0;

    while (Date.now() - now < time) {
        count++;
    }

    return count;
}