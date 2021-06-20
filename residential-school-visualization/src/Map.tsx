import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export function Map() {
  // 60.178842
  // -134.685426
  return (
    <MapContainer
      center={[60.178842, -134.685426]}
      zoom={4}
      //   scrollWheelZoom={false}
    >
      (/*This is using the open-source OpenStreetMap API*/)
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[60.178842, -134.685426]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
