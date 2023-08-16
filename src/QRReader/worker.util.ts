export const createWorker = () => new Worker(new URL('./qrWorker.js', import.meta.url))
