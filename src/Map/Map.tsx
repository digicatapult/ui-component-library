import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import mapboxgl from 'mapbox-gl'

import colors from '../colors'

interface StartPosition {
  long: number
  lat: number
  zoom: number
}

interface Size {
  height: string
  width: string
}

interface ClusterOptions {
  clusterMaxZoom: number
  clusterAreaRadius: number
  clusterColor: string
  clusterRadius: number
  countFont: string[]
  countFontSize: number
  countFontColor: string
  pointColor: string
  pointRadius: number
}

export interface Props {
  token: string
  size?: Size
  startPosition?: StartPosition
  style?: string
  sourceJson?: string
  cluster: boolean
  clusterOptions?: ClusterOptions
}

const Wrapper = styled('div')<Size>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

const Map: React.FC<Props> = (props) => {
  const mapContainer = useRef(null)
  const map = useRef<mapboxgl.Map | null>(null)

  mapboxgl.accessToken = props.token

  const height = props.size?.height || '800px'
  const width = props.size?.width || '800px'

  const long = props.startPosition?.long || -3.5
  const lat = props.startPosition?.lat || 55
  const zoom = props.startPosition?.zoom || 5

  const style = props.style || 'mapbox://styles/mapbox/light-v11'
  const source = props.sourceJson || ''
  const cluster = props.cluster || false

  const clusterMaxZoom = props.clusterOptions?.clusterMaxZoom || 14
  const clusterAreaRadius = props.clusterOptions?.clusterAreaRadius || 50
  const clusterColor = props.clusterOptions?.clusterColor || colors.black
  const clusterRadius = props.clusterOptions?.clusterRadius || 20
  const countFont = props.clusterOptions?.countFont || ['Open Sans Regular']
  const countFontSize = props.clusterOptions?.countFontSize || 14
  const countFontColor = props.clusterOptions?.countFontColor || colors.white
  const pointColor = props.clusterOptions?.pointColor || colors.black
  const pointRadius = props.clusterOptions?.pointRadius || 6

  useEffect(() => {
    if (map.current) return undefined // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: style,
      center: [long, lat],
      zoom: zoom,
      attributionControl: false,
    })
  })

  useEffect(() => {
    if (!map.current) return undefined // wait for map to initialize
    map.current.on('load', () => {
      map.current?.addSource('source', {
        type: 'geojson',
        data: source,
        cluster: cluster,
        clusterMaxZoom: clusterMaxZoom, // Max zoom to cluster points on
        clusterRadius: clusterAreaRadius, // Radius of each cluster when clustering points (defaults to 50)
      })

      map.current?.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'source',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': clusterColor,
          'circle-radius': clusterRadius,
        },
      })

      map.current?.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'source',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count_abbreviated'],
          'text-font': countFont,
          'text-size': countFontSize,
        },
        paint: {
          'text-color': countFontColor,
        },
      })

      map.current?.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'source',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': pointColor,
          'circle-radius': pointRadius,
        },
      })

      // inspect a cluster on click
      map.current?.on('click', 'clusters', (e) => {
        const features = map.current!.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        })

        const clusterId = features[0]?.properties?.cluster_id
        const source: mapboxgl.GeoJSONSource = map.current!.getSource(
          'source'
        ) as mapboxgl.GeoJSONSource
        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return

          if (features[0].geometry.type === 'Point') {
            const coordinates = features[0].geometry.coordinates
            map.current?.easeTo({
              center: coordinates as mapboxgl.LngLatLike,
              zoom: zoom,
            })
          }
        })
      })

      map.current?.on('mouseenter', 'clusters', () => {
        map.current!.getCanvas().style.cursor = 'pointer'
      })
      map.current?.on('mouseleave', 'clusters', () => {
        map.current!.getCanvas().style.cursor = ''
      })
    })
  })

  return <Wrapper ref={mapContainer} height={height} width={width}></Wrapper>
}

export default Map
