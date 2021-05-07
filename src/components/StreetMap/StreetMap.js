import React, { useState , useRef } from 'react';
import "leaflet/dist/leaflet.css"
import "./index.css"
import styles from './StreetMap.module.scss';
import {MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import map from "./map-provider"
import { iconPerson } from './POIIcon.js';


const StreetMap = ({companies}) => {
  const [center, setCenter] = useState({ lat: 47.811195, lng: 13.033229})
  const ZOOM_LEVEL = 13
  const mapRef = useRef()

  return(
    <div className={styles.StreetMap}>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer url={map.maptiler.url} attribution={map.maptiler.attribution}/>
            {companies.map((companie,index)=>{
              return (<Marker position={companie.position} icon={iconPerson}>
               <Popup><h2>{companie.name}</h2>
                  <a href={companie.website}>{companie.website}</a>
                  <p><i class="material-icons">public</i>{companie.departments.join(', ')}</p>
                  <p>{companie.salary}</p><p>{companie.satisfaction}</p>
                  <p>{companie.links.join(', ')+companie.links.join(', ')+companie.links.join(', ')}</p>
                </Popup>
              </Marker>)
            })}
        </MapContainer>
    </div>
  )};

StreetMap.propTypes = {};

StreetMap.defaultProps = {};

export default StreetMap;
