export const getUserMedia = jest.fn().mockImplementation(
  () =>
    new Promise((r) =>
      setTimeout(r, 0, {
        getTracks: () => []
      })
    )
)
