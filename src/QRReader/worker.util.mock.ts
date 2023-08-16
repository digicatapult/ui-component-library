export const createWorker = () => ({
  terminate: jest.fn().mockReturnValue(undefined),
  postMessage: jest.fn().mockReturnValue(undefined)
})
