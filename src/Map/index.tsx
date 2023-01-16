import React, { useRef, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import mapboxgl, {
  LngLatLike,
  MapboxGeoJSONFeature,
  GeoJSONSource,
  Expression,
} from 'mapbox-gl'
import { FeatureCollection, GeoJSON } from 'geojson'

import colors from '../colors.js'

export interface InitialState {
  long?: number
  lat?: number
  zoom?: number
  height?: string
  width?: string
  style?: string
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
  pointExpression?: Expression
  pointColor?: string
  pointRadius?: number
  pointRadiusExpression?: Expression
  pointStrokeWidth?: number
  pointStrokeColor?: string
  onPointClick?: (feature: MapboxGeoJSONFeature) => void
  onClickZoomIn?: number
}

export interface MarkerOptions {
  markerSearchFocus?: boolean
  markerLinear?: boolean
  markerMaxZoom?: number
  markerSpeed?: number
  markerPadding?: number
}

export interface Props {
  token: string
  sourceJson?: GeoJSON
  initialState?: InitialState
  cluster?: boolean
  clusterOptions?: ClusterOptions
  pointOptions?: PointOptions
  markerOptions?: MarkerOptions
  zoomLocation?: [number, number]
  easeSpeed?: number
}

const Wrapper = styled('div')<InitialState>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

const applyLayerDefaults = (props: Props) => {
  return {
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
      pointExpression: props.pointOptions?.pointExpression || null,
      pointColor: props.pointOptions?.pointColor || colors.black,
      pointRadius: props.pointOptions?.pointRadius || 5,
      pointRadiusExpression: props.pointOptions?.pointRadiusExpression || null,
      pointStrokeWidth: props.pointOptions?.pointStrokeWidth || 0,
      pointStrokeColor: props.pointOptions?.pointStrokeColor || colors.white,
      onPointClick: props.pointOptions?.onPointClick || Function(),
      onClickZoomIn: props.pointOptions?.onClickZoomIn || 11,
    },
    markerOptions: {
      markerSearchFocus: props.markerOptions?.markerSearchFocus || false,
      markerLinear: props.markerOptions?.markerLinear || false,
      markerMaxZoom: props.markerOptions?.markerMaxZoom || 12,
      markerSpeed: props.markerOptions?.markerSpeed || 0.6,
      markerPadding: props.markerOptions?.markerPadding || 100,
    },
  }
}

const updateMap = (sourceJson: GeoJSON | undefined) => {
  if (sourceJson != null || sourceJson != undefined) {
    if ((sourceJson as FeatureCollection).features.length > 0) {
      let bounds = (sourceJson as FeatureCollection).features.reduce(function (
        bounds: any,
        feature: any
      ) {
        if (!Array.isArray(feature.geometry.coordinates[0])) {
          return bounds.extend(feature.geometry.coordinates)
        } else {
          return feature.geometry.coordinates.reduce(function (
            bounds: any,
            coord: any
          ) {
            return bounds.extend(coord)
          },
          bounds)
        }
      },
      new mapboxgl.LngLatBounds())
      return bounds
    }
  }
}

const Map: React.FC<Props> = (props) => {
  const mapContainer = useRef(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)

  const {
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
    pointOptions: {
      pointExpression,
      pointColor,
      pointRadius,
      pointRadiusExpression,
      pointStrokeWidth,
      pointStrokeColor,
      onPointClick,
      onClickZoomIn,
    },
    markerOptions: {
      markerSearchFocus,
      markerLinear,
      markerMaxZoom,
      markerSpeed,
      markerPadding,
    },
  } = applyLayerDefaults(props)

  const sourceJson = props.sourceJson
  const height = props.initialState?.height || '800px'
  const width = props.initialState?.width || '800px'
  mapboxgl.accessToken = props.token
  const easeSpeed = props?.easeSpeed || 4000 // milliseconds
  const bounds = useMemo(() => updateMap(sourceJson), [sourceJson])
  // initialize map
  useEffect(() => {
    if (mapRef.current) return undefined

    // defaults
    const long = props.initialState?.long || -3.5
    const lat = props.initialState?.lat || 55
    const zoom = props.initialState?.zoom || 5
    const style =
      props.initialState?.style || 'mapbox://styles/mapbox/light-v11'

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: style,
      center: [long, lat],
      zoom: zoom,
      attributionControl: false,
      testMode: true,
    })

    // clean up
    return () => {
      mapRef?.current?.remove()
      mapRef.current = null
    }
  }, [
    props.initialState?.style,
    props.initialState?.long,
    props.initialState?.lat,
    props.initialState?.zoom,
    // height/width changes require map reload
    props.initialState?.height,
    props.initialState?.width,
  ])

  // update map geojson without map reload
  useEffect(() => {
    const map = mapRef.current
    if (!map || !sourceJson) return undefined

    const geojsonSource = map.getSource('source') as GeoJSONSource
    geojsonSource?.setData(sourceJson as FeatureCollection)
  }, [sourceJson])

  // update map fitBound area
  useEffect(() => {
    const map = mapRef.current
    if (!map || !sourceJson) return undefined

    // Update map on search
    if (markerSearchFocus) {
      updateMap(sourceJson)
      map.fitBounds(bounds, {
        linear: markerLinear,
        maxZoom: markerMaxZoom,
        speed: markerSpeed,
        padding: markerPadding,
      })
    }
  }, [
    sourceJson,
    bounds,
    markerSearchFocus,
    markerLinear,
    markerMaxZoom,
    markerSpeed,
    markerPadding,
  ])

  // Use to travel to location on card click
  useEffect(() => {
    const map = mapRef.current
    // Check that map exists before looking to zoom in (given coordinates exist)
    if (map != null && props?.zoomLocation != null) {
      map.easeTo({
        center: props?.zoomLocation as LngLatLike,
        zoom: onClickZoomIn,
        duration: easeSpeed,
        essential: true,
      })
    }
  }, [props?.zoomLocation, onClickZoomIn, easeSpeed])

  // add layers after map load
  useEffect(() => {
    const map = mapRef.current
    if (!map) return undefined

    map.on('load', () => {
      map.addSource('source', {
        type: 'geojson',
        data: sourceJson,
        cluster: cluster,
        clusterMaxZoom: clusterMaxZoom, // Max zoom to cluster points on
        clusterRadius: clusterAreaRadius, // Radius of each cluster when clustering points
      })

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'source',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': clusterColor,
          'circle-radius': clusterRadius,
        },
      })

      map.addLayer({
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

      map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'source',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color':
            pointExpression != null ? pointExpression : pointColor,
          'circle-radius':
            pointRadiusExpression != null ? pointRadiusExpression : pointRadius,
          'circle-stroke-color': pointStrokeColor,
          'circle-stroke-width': pointStrokeWidth,
        },
      })

      // inspect a cluster on click
      map.on('click', 'clusters', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        })

        const clusterId = features[0]?.properties?.cluster_id
        const source: mapboxgl.GeoJSONSource = map.getSource(
          'source'
        ) as mapboxgl.GeoJSONSource
        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return

          if (features[0].geometry.type === 'Point') {
            map.easeTo({
              center: features[0].geometry.coordinates as LngLatLike,
              zoom: zoom,
            })
          }
        })
      })

      map.on('click', 'unclustered-point', (e) => {
        const features = map.queryRenderedFeatures(e.point)
        if (features[0].geometry.type === 'Point') {
          onPointClick(features[0])

          // center on point, zoom in if current zoom is less than onClickZoomIn
          map.easeTo({
            center: features[0].geometry.coordinates as LngLatLike,
            zoom: Math.max(map.getZoom(), onClickZoomIn),
          })
        }
      })

      map.on('mouseenter', 'clusters', () => {
        map.getCanvas().style.cursor = 'pointer'
      })
      map.on('mouseleave', 'clusters', () => {
        map.getCanvas().style.cursor = ''
      })
    })
  })

  return <Wrapper ref={mapContainer} height={height} width={width}></Wrapper>
}

export default Map
