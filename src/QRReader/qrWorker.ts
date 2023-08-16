import type { DecodeRequest, DecodeResponse } from './types'

import jsQR from 'jsqr'

// note this is intentionally defensive to ensure any message received
// is responded to. jsQR *might* throw
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
