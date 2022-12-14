import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import mapboxgl, { LngLatLike, MapboxGeoJSONFeature } from 'mapbox-gl'

import colors from '../colors'

export interface StartPosition {
  long?: number
  lat?: number
  zoom?: number
}

export interface Size {
  height?: string
  width?: string
}

export interface ClusterOptions {
  clusterMaxZoom?: number
  clusterAreaRadius?: number
  clusterColor?: string
  clusterRadius?: number
  countFont?: string[]
  countFontSize?: number
  countFontColor?: string
}

export interface PointOptions {
  pointColor?: string
  pointRadius?: number
  onPointClick?: (properties: MapboxGeoJSONFeature) => void
  onClickZoomIn?: number
}

export interface Props {
  token: string
  sourceJson?: string
  style?: string
  size?: Size
  startPosition?: StartPosition
  cluster?: boolean
  clusterOptions?: ClusterOptions
  pointOptions?: PointOptions
}

const Wrapper = styled('div')<Size>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

const applyDefaults = (props: Props) => {
  return {
    token: props.token,
    sourceJson: props.sourceJson || '',
    style: props.style || 'mapbox://styles/mapbox/light-v11',
    size: {
      height: props.size?.height || '800px',
      width: props.size?.width || '800px',
    },
    startPosition: {
      long: props.startPosition?.long || -3.5,
      lat: props.startPosition?.lat || 55,
      zoom: props.startPosition?.zoom || 5,
    },
    cluster: props.cluster || false,
    clusterOptions: {
      clusterMaxZoom: props.clusterOptions?.clusterMaxZoom || 14,
      clusterAreaRadius: props.clusterOptions?.clusterAreaRadius || 50,
      clusterColor: props.clusterOptions?.clusterColor || colors.black,
      clusterRadius: props.clusterOptions?.clusterRadius || 20,
      countFont: props.clusterOptions?.countFont || ['Open Sans Regular'],
      countFontSize: props.clusterOptions?.countFontSize || 14,
      countFontColor: props.clusterOptions?.countFontColor || colors.white,
    },
    pointOptions: {
      pointColor: props.pointOptions?.pointColor || colors.black,
      pointRadius: props.pointOptions?.pointRadius || 6,
      onPointClick: props.pointOptions?.onPointClick || Function(),
      onClickZoomIn: props.pointOptions?.onClickZoomIn || 12,
    },
  }
}

const Map: React.FC<Props> = (props) => {
  const mapContainer = useRef(null)
  const map = useRef<mapboxgl.Map | null>(null)

  const {
    token,
    sourceJson,
    style,
    size: { height, width },
    startPosition: { long, lat, zoom },
    cluster,
    clusterOptions: {
      clusterMaxZoom,
      clusterAreaRadius,
      clusterColor,
      clusterRadius,
      countFont,
      countFontSize,
      countFontColor,
    },
    pointOptions: { pointColor, pointRadius, onPointClick, onClickZoomIn },
  } = applyDefaults(props)

  mapboxgl.accessToken = token

  useEffect(() => {
    if (map.current) return undefined // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: style,
      center: [long, lat],
      zoom: zoom,
      attributionControl: false,
    })
    console.log(map.current)
  })

  useEffect(() => {
    if (!map.current) return undefined // wait for map to initialize
    map.current.on('load', () => {
      map.current?.addSource('source', {
        type: 'geojson',
        data: sourceJson,
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
            map.current?.easeTo({
              center: features[0].geometry.coordinates as LngLatLike,
              zoom: zoom,
            })
          }
        })
      })

      map.current?.on('click', 'unclustered-point', (e) => {
        const features = map.current!.queryRenderedFeatures(e.point)
        if (features[0].geometry.type === 'Point') {
          onPointClick(features[0])

          // center on point, zoom in if current zoom is less than onClickZoomIn
          map.current?.easeTo({
            center: features[0].geometry.coordinates as LngLatLike,
            zoom: Math.max(map.current.getZoom(), onClickZoomIn),
          })
        }
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
