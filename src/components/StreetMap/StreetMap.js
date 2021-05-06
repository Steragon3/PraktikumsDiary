import React, { useState , useRef } from 'react';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css"
import "./index.css"
import styles from './StreetMap.module.scss';
import {MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import map from "./map-provider"
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import Markericon from 'leaflet/dist/images/marker-icon.png';
import { iconPerson } from './POIIcon.js';
import icon from './room_white_24dp.svg';
import L, { Point, DivIcon } from 'leaflet'


L.Icon.Default.mergeOptions({
    iconRetinaUrl: Markericon,
    iconUrl: Markericon,
    shadowUrl:MarkerShadow
});

const StreetMap = () => {
  const [center, setCenter] = useState({ lat: 47.811195, lng: 13.033229})
  const ZOOM_LEVEL = 13
  const mapRef = useRef()
  const position = [47.724040,13.086170]
  return(
    <div className={styles.StreetMap}>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer url={map.maptiler.url} attribution={map.maptiler.attribution}/>
          <Marker position={position} icon={iconPerson}>
            <Popup>
              Fh Schnalzburg <br /> Puff bei Hallein
            </Popup>
          </Marker>
        </MapContainer>
    </div>
  )};

StreetMap.propTypes = {};

StreetMap.defaultProps = {};

export default StreetMap;
