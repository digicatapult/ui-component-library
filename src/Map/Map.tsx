import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import mapboxgl from 'mapbox-gl'
import { FeatureCollection } from 'geojson'

import exampleJson from './example.json'
import colors from '../colors'

mapboxgl.accessToken =
  process.env.STORYBOOK_MAPBOX_TOKEN !== undefined
    ? process.env.STORYBOOK_MAPBOX_TOKEN
    : ''

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
  maxZoom: number
  radius: number
}

export interface Props {
  size?: Size
  startPosition?: StartPosition
  style?: string
  clusterOptions?: ClusterOptions
}

const Wrapper = styled('div')<Size>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

const Map: React.FC<Props> = (props) => {
  const mapContainer = useRef(null)
  const map = useRef<mapboxgl.Map | null>(null)

  const height = props.size?.height || '800px'
  const width = props.size?.width || '800px'

  const long = props.startPosition?.long || -3.5
  const lat = props.startPosition?.lat || 55
  const zoom = props.startPosition?.zoom || 5
  const style = props.style || 'mapbox://styles/mapbox/light-v11'

  const clusterMaxZoom = props.clusterOptions?.maxZoom || 14
  const clusterRadius = props.clusterOptions?.radius || 50

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: style,
      center: [long, lat],
      zoom: zoom,
      attributionControl: false,
    })
  })

  useEffect(() => {
    if (!map.current) return // wait for map to initialize

    map.current.on('load', () => {
      map.current?.addSource('source', {
        type: 'geojson',
        data: exampleJson as FeatureCollection,
        cluster: true,
        clusterMaxZoom: clusterMaxZoom, // Max zoom to cluster points on
        clusterRadius: clusterRadius, // Radius of each cluster when clustering points (defaults to 50)
      })

      map.current?.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'source',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': colors.green,
          'circle-radius': 28,
        },
      })

      map.current?.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'source',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count_abbreviated'],
          'text-font': ['Open Sans Regular'],
          'text-size': 14,
        },
        paint: {
          'text-color': '#fff',
        },
      })

      map.current?.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'source',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': colors.green,
          'circle-radius': 8,
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
