import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const MapView = () => {
  return (
    <MapContainer center={[-31.384919, -64.227073]} zoom={13} className='h-[31.25rem] w-[31.25rem]' scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[-31.384919, -64.227073]}>
        <Popup>
          Fundación Animal
        </Popup>
      </Marker>
    </MapContainer>
  );
};
