import React, { useState , useRef } from 'react';
import "leaflet/dist/leaflet.css"
import "./index.css"
import styles from './StreetMap.module.scss';
import {MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import map from "./map-provider"
import { iconPerson, FHLogo } from './POIIcon.js';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


const StreetMap = ({companies}) => {
  const [center, setCenter] = useState({ lat: 47.811195, lng: 13.033229})
  const ZOOM_LEVEL = 13
  const mapRef = useRef()

  return(
    <div className={styles.StreetMap}>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer url={map.maptiler.url} attribution={map.maptiler.attribution}/>
          <Marker position={position} icon={FHLogo}><Popup><h2>FH-Salzburg</h2><p>Campus Urstein</p></Popup></Marker>
            {companies.map((companie,index)=>{
              console.log(companie.website) 
              return (<Marker position={companie.position} icon={iconPerson}>
               <Popup><h2>{companie.name}</h2>
                  <p className={styles.p}><span><i className={styles.icons + " material-icons"}>public</i> </span> <a href={companie.website}>{companie.website}</a></p>
                  <p className={styles.p}><span className={styles.text }><i className={styles.icons + " material-icons"}>work</i>  {companie.departments.join(', ')}</span></p>
                  <p className={styles.p}><span className={styles.text }><i className={styles.icons + " material-icons"}>paid</i>  {companie.salary}</span></p>
                  <p className={styles.p}><span className={styles.text }><i className={styles.icons + " material-icons"}>emoji_emotions</i>  {companie.satisfaction}</span></p>
                  <p className={styles.p}><span className={styles.text }><i className={styles.icons + " material-icons"}>description</i> {companie.links.map((e, index)=>{return <a href={e}>{e}, </a>})}</span></p>
                </Popup>
              </Marker>)
            })}
        </MapContainer>
    </div>
  )};

StreetMap.propTypes = {};

StreetMap.defaultProps = {};

export default StreetMap;
