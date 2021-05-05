import React, { useState , useRef } from 'react';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css"
import "./index.css"
import styles from './StreetMap.module.scss';
import {MapContainer, TileLayer } from "react-leaflet"
import map from "./map-provider"

 
const StreetMap = () => {
  const [center, setCenter] = useState({ lat: 47.811195, lng: 13.033229})
  const ZOOM_LEVEL = 13
  const mapRef = useRef()
  return(
    <div className={styles.StreetMap}>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer url={map.maptiler.url} attribution={map.maptiler.attribution}/>
        </MapContainer>
    </div>
  )};

StreetMap.propTypes = {};

StreetMap.defaultProps = {};

export default StreetMap;
