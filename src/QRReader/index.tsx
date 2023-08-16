import { styled } from 'styled-components'
import type { DecodeRequest, DecodeResponse } from './types'

import React, { useState, useEffect, useRef, useCallback } from 'react'

import { createWorker } from './worker.util.js'
import { getUserMedia } from './userMedia.util.js'

export interface QRReaderProps {
  onResult: (result: string) => void
  scanDelay?: number
  viewFinderColor?: string
  viewFinderVariant?: 'viewfinder-cross-med' | 'viewfinder-none'
  className?: string
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const QRReader: React.FC<QRReaderProps> = ({
  onResult,
  scanDelay = 500,
  viewFinderColor = '#55555580',
  viewFinderVariant = 'viewfinder-cross-med',
  className,
}) => {
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const workerRef = useRef<Worker | null>(null)

  // kick off the webworker that will process qr decode requests
  useEffect(() => {
    const worker = createWorker()
    workerRef.current = worker

    return () => {
      worker.terminate()
    }
  }, [])

  // hook to initialise the media loop
  useEffect(() => {
    const constraints = { video: { facingMode: 'environment' } }
    let stream: MediaStream | null = null

    getUserMedia(constraints)
      .then((mediaStream) => {
        const video = videoRef.current
        if (!video) {
          // this should never happen
          throw new Error('Video was not initialised as expected')
        }

        video.srcObject = mediaStream
        video.play()
        stream = mediaStream
      })
      .catch((err) => {
        // TODO: trigger an error state and render a fallback
        console.error('Error accessing webcam:', err)
        setError('Error accessing webcam')
      })

    return () => {
      if (!stream) {
        return
      }
      const tracks = stream.getTracks()
      tracks.forEach((track) => {
        track.stop()
      })
    }
  }, [setError])

  const parseCurrentFrame = useCallback(async () => {
    const canvas = canvasRef.current
    const video = videoRef.current
    const worker = workerRef.current

    if (
      !canvas ||
      !video ||
      !worker ||
      video.readyState !== video.HAVE_ENOUGH_DATA
    ) {
      return null
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return null
    }

    canvas.height = video.videoHeight * 0.8
    canvas.width = video.videoWidth * 0.8
    ctx.drawImage(
      video,
      0.1 * video.videoWidth,
      0.1 * video.videoHeight,
      video.videoWidth * 0.8,
      video.videoHeight * 0.8,
      0,
      0,
      canvas.width,
      canvas.height,
    )

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    const message: DecodeRequest = {
      data: imageData.data,
      width: imageData.width,
      height: imageData.height,
    }

    const result = await new Promise<string | null>((resolve) => {
      worker.onmessage = ({ data }: { data: DecodeResponse }) => {
        if (data.type === 'success') {
          const code = data.code
          resolve(code.data)
        }
        resolve(null)
      }

      worker.postMessage(message)
    })
    return result
  }, [])

  // start the decoding loop. Note we store the result in local state so that we don't need to restart the loop just because the onResult handler changes
  useEffect(() => {
    let stop = false
    const loop = async () => {
      while (true) {
        if (stop) {
          return
        }
        const result = await parseCurrentFrame()
        if (stop) {
          return
        }
        setResult(result)
        await delay(scanDelay)
      }
    }
    loop()

    return () => {
      stop = true
    }
  }, [setResult, scanDelay, parseCurrentFrame])

  // Update the parent on result changes whenever they happen
  useEffect(() => {
    if (result) {
      onResult(result)
    }
  }, [result, onResult])

  return error ? (
    <div className={className}>{error}</div>
  ) : (
    <Wrapper
      className={className}
      showViewfinder={viewFinderVariant === 'viewfinder-cross-med'}
      viewFinderColor={viewFinderColor}
    >
      <Video ref={videoRef} muted={true} />
      <canvas ref={canvasRef} hidden={true} />
    </Wrapper>
  )
}

const Wrapper = styled.div<{
  showViewfinder: boolean
  viewFinderColor: string
}>`
  width: 100%;
  position: relative;

  ${({ showViewfinder, viewFinderColor }) =>
    showViewfinder
      ? `
  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    opacity: 0.2;
    background:
      linear-gradient(to right, ${viewFinderColor} 4px, transparent 4px) 0 0,
      linear-gradient(to right, ${viewFinderColor} 4px, transparent 4px) 0 100%,
      linear-gradient(to left, ${viewFinderColor} 4px, transparent 4px) 100% 0,
      linear-gradient(to left, ${viewFinderColor} 4px, transparent 4px) 100% 100%,
      linear-gradient(to bottom, ${viewFinderColor} 4px, transparent 4px) 0 0,
      linear-gradient(to bottom, ${viewFinderColor} 4px, transparent 4px) 100% 0,
      linear-gradient(to top, ${viewFinderColor} 4px, transparent 4px) 0 100%,
      linear-gradient(to top, ${viewFinderColor} 4px, transparent 4px) 100% 100%;

    background-repeat: no-repeat;
    background-size: 20px 20px;
  }

  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    opacity: 0.2;
    background:
      linear-gradient(to right, ${viewFinderColor} 4px, transparent 4px)
        calc(50% + 30px - 2px) 50%,
      linear-gradient(to bottom, ${viewFinderColor} 4px, transparent 4px) 50%
        calc(50% + 30px - 2px);

    background-repeat: no-repeat;
    background-size: 60px 60px;
  }`
      : ''}
`

const Video = styled.video`
  width: 100%;
`

export default QRReader
