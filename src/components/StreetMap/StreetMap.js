import React, { useState , useRef } from 'react';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css"
import "./index.css"
import styles from './StreetMap.module.scss';
import {MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import {Link} from "react-router-dom"
import map from "./map-provider"
import { iconPerson } from './POIIcon.js';
import icon from './room_white_24dp.svg';
import L, { Point, DivIcon } from 'leaflet'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

// const companies =  [
//   {
//       name: 'Google',
//       website: 'https://www.google.com',
//       departments: ['Hebamme', 'MMT', 'MMA'],
//       salary: 'None',
//       satisfaction: 'Very',
//       links: ['https://wiki.mediacube.at/wiki/index.php?title=Multimediaprojekt_2_Web_-_SS_2021#PraktikumsTagebuch', 'https://wiki.mediacube.at/wiki/index.php?title=Multimediaprojekt_2_Web_-_SS_2021#Voraussetzungen'],
//       position: [48.200364, 14.271086]
//   },
//   {
//       name: 'Google 2',
//       website: 'www.google.com',
//       departments: ['MMT', 'MMA'],
//       salary: 'None',
//       satisfaction: 'Very',
//       links: ['https://wiki.mediacube.at/wiki/index.php?title=Multimediaprojekt_2_Web_-_SS_2021#PraktikumsTagebuch', 'https://wiki.mediacube.at/wiki/index.php?title=Multimediaprojekt_2_Web_-_SS_2021#Voraussetzungen'],
//       position: [49.200364, 14.271086]
//   }
// ]
const StreetMap = ({companies}) => {
  const [center, setCenter] = useState({ lat: 47.811195, lng: 13.033229})
  const ZOOM_LEVEL = 13
  const mapRef = useRef()
  const position = [47.724040,13.086170]
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
                  <p>{companie.links.map((e, index)=>{return<a href={e}>{e}</a>})}</p>
                </Popup>
              </Marker>)
            })}
        </MapContainer>
    </div>
  )};

StreetMap.propTypes = {};

StreetMap.defaultProps = {};

export default StreetMap;
