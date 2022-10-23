import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = () => {
 return (
  <div className='leafletContainer'>
   <MapContainer
    style={{ height: '100%', width: '100%' }}
    center={[32.1753749, 34.9254946]}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
     url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
    />

    <Marker position={[32.1753749, 34.9254946]}>
     <Popup>יוחנן הסנדלר 6 כפר סב</Popup>
    </Marker>
   </MapContainer>
  </div>
 );
};

export default Map;
