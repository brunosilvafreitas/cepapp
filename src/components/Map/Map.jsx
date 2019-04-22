/* global H */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'
import Box from '../Box'

const MapContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  box-sizing: border-box;
`

const MapWrapper = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const id = shortid.generate()

const Map = ({ appId, appCode, lat, lng, zoom = 15.5, ...other }) => {
  const [map, setMap] = useState()

  useEffect(() => {
    if (!map) {
      const platform = new H.service.Platform({
        'app_id': appId,
        'app_code': appCode
      })

      const defaultLayers = platform.createDefaultLayers()

      const newMap = new H.Map(
        document.getElementById(id),
        defaultLayers.normal.map,
        {
          zoom,
          center: { lng, lat }
        })

      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(newMap))

      const newMarker = new H.map.Marker({ lng, lat })
      newMap.addObject(newMarker)

      const ui = H.ui.UI.createDefault(newMap, defaultLayers, 'pt-BR')
      ui.removeControl('mapsettings')
      setMap(newMap)
    } else {
      map.removeObjects(map.getObjects())
      map.setCenter({ lng, lat })
      const newMarker = new H.map.Marker({ lng, lat })
      map.addObject(newMarker)
    }
  })

  return (
    <MapContainer {...other}>
      <MapWrapper id={id} />
    </MapContainer>
  )
}

Map.displayName = 'Map'

export default Map
