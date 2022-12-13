import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  process.env.STORYBOOK_MAPBOX_TOKEN !== undefined
    ? process.env.STORYBOOK_MAPBOX_TOKEN
    : ''

type StartPosition = {
  long: number
  lat: number
  zoom: number
}

export interface Props {
  text: string
  startPosition: StartPosition
}

// const Wrapper = styled('div')<Props>``
const Wrapper = styled('div')``

const Map: React.FC<Props> = (props) => {
  const mapContainer = useRef(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng, setLng] = useState(props.startPosition?.long || -3.5)
  const [lat, setLat] = useState(props.startPosition?.lat || 55)
  const [zoom, setZoom] = useState(props.startPosition?.zoom || 5)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom,
    })
  })

  return <Wrapper ref={mapContainer}>{props.text}</Wrapper>
}

export default Map
