/* global H */
import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import shortid from 'shortid'

const MapContainer = styled.div`
  width: 400px;
  height: 300px;
`

const Map = ({ appId, appCode, lat, lng, ...other }) => {
  const id = shortid.generate()

  useEffect(() => {
    const platform = new H.service.Platform({
      'app_id': appId,
      'app_code': appCode
    })

    const defaultLayers = platform.createDefaultLayers()

    const map = new H.Map(
      document.getElementById(id),
      defaultLayers.normal.map,
      {
        zoom: 16,
        center: { lng, lat }
      })

    const ui = H.ui.UI.createDefault(map, defaultLayers, 'pt-BR')
  })

  return (
    <MapContainer id={id} {...other}>
      <Helmet>
        <script src='http://js.api.here.com/v3/3.0/mapsjs-core.js' type='text/javascript' charset='utf-8' />
        <script src='http://js.api.here.com/v3/3.0/mapsjs-service.js' type='text/javascript' charset='utf-8' />
        <script src='http://js.api.here.com/v3/3.0/mapsjs-ui.js' type='text/javascript' charset='utf-8' />
        <link rel='stylesheet' type='text/css' href='http://js.api.here.com/v3/3.0/mapsjs-ui.css' />
      </Helmet>
    </MapContainer>
  )
}

Map.displayName = 'Map'

export default Map
