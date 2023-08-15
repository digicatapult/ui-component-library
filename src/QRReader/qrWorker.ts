import type { DecodeRequest, DecodeResponse } from './types'

import jsQR from 'jsqr'

self.onmessage = ({ data }: { data: DecodeRequest }) => {
  let response: DecodeResponse
  try {
    const code = jsQR(data.data, data.width, data.height)
    response = code
      ? {
          type: 'success',
          code
        }
      : {
          type: 'failure'
        }
  } catch (err) {
    response = { type: 'failure' }
  }

  self.postMessage(response)
}
