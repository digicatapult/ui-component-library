import { styled } from 'styled-components'
import type { DecodeRequest, DecodeResponse } from './types'

import React, { useState, useEffect, useRef, useCallback } from 'react'

export interface QRReaderProps {
  onResult: (result: string) => void
  showViewfinder: boolean
  scanDelay?: number
  width?: number
  className?: string
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const QRReader: React.FC<QRReaderProps> = ({
  onResult,
  scanDelay = 500,
  showViewfinder = true,
  className,
}) => {
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const workerRef = useRef<Worker | null>(null)

  // kick off the webworker that will process qr decode requests
  useEffect(() => {
    const worker = new Worker(new URL('./qrWorker.js', import.meta.url))
    workerRef.current = worker

    return () => {
      worker.terminate()
    }
  }, [])

  // hook to initialise the media loop
  useEffect(() => {
    const constraints = { video: { facingMode: 'environment' } }

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        const video = videoRef.current
        if (!video) {
          // this should never happen
          throw new Error('Video was not initialised as expected')
        }

        video.srcObject = stream
        video.play()
        streamRef.current = stream
      })
      .catch((err) => {
        // TODO: trigger an error state and render a fallback
        console.error('Error accessing webcam:', err)
        setError('Error accessing webcam')
      })

    return () => {
      // Cleanup function to stop the stream when the component is unmounted
      const stream = streamRef.current
      if (!stream) {
        return
      }
      const tracks = stream.getTracks()
      tracks.forEach((track) => {
        track.stop()
      })
    }
  }, [videoRef, streamRef, setError])

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
  }, [canvasRef, videoRef, workerRef])

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
    <Wrapper className={className} showViewfinder={showViewfinder}>
      <Video ref={videoRef} muted={true} />
      <canvas ref={canvasRef} hidden={true} />
    </Wrapper>
  )
}

const Wrapper = styled.div<{ showViewfinder: boolean }>`
  width: 100%;
  position: relative;

  ${({ showViewfinder }) =>
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
    background:
      linear-gradient(to right, #555555 4px, transparent 4px) 0 0,
      linear-gradient(to right, #555555 4px, transparent 4px) 0 100%,
      linear-gradient(to left, #555555 4px, transparent 4px) 100% 0,
      linear-gradient(to left, #555555 4px, transparent 4px) 100% 100%,
      linear-gradient(to bottom, #555555 4px, transparent 4px) 0 0,
      linear-gradient(to bottom, #555555 4px, transparent 4px) 100% 0,
      linear-gradient(to top, #555555 4px, transparent 4px) 0 100%,
      linear-gradient(to top, #555555 4px, transparent 4px) 100% 100%;

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
    background:
      linear-gradient(to right, #555555 4px, transparent 4px)
        calc(50% + 30px - 2px) 50%,
      linear-gradient(to bottom, #555555 4px, transparent 4px) 50%
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
