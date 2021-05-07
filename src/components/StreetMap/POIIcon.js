import L from 'leaflet';
import icon from './room_white_24dp.svg';
import fhlogo from './FH_Salzburg_Logo_Dachmarke_DE_RGB.jpg'


const iconPerson = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

const FHLogo = new L.Icon({
    iconUrl: fhlogo,
    iconRetinaUrl: fhlogo,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});



export { iconPerson, FHLogo };