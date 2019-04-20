/* global H */
import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import shortid from 'shortid'
import Box from '../Box'

const MapContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%;
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

      const ui = H.ui.UI.createDefault(newMap, defaultLayers, 'pt-BR')
      ui.removeControl('mapsettings')
      setMap(newMap)
    } else {
      map.setCenter({ lng, lat })
    }
  })

  return (
    <MapContainer {...other}>
      <Helmet>
        <script src='http://js.api.here.com/v3/3.0/mapsjs-core.js' type='text/javascript' charset='utf-8' />
        <script src='http://js.api.here.com/v3/3.0/mapsjs-service.js' type='text/javascript' charset='utf-8' />
        <script src='http://js.api.here.com/v3/3.0/mapsjs-ui.js' type='text/javascript' charset='utf-8' />
        <link rel='stylesheet' type='text/css' href='http://js.api.here.com/v3/3.0/mapsjs-ui.css' />
      </Helmet>
      <MapWrapper id={id} />
    </MapContainer>
  )
}

Map.displayName = 'Map'

export default Map
