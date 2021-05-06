import L from 'leaflet';
import icon from './room_white_24dp.svg';



const iconPerson = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

export { iconPerson };