import type { QRCode } from 'jsqr'

export type DecodeRequest = {
  data: Uint8ClampedArray
  width: number
  height: number
}

export type DecodeResponse =
  | {
      type: 'success'
      code: QRCode
    }
  | {
      type: 'failure'
    }
