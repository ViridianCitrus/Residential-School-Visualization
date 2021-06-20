import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getSchools, School } from "./Schools/Schools";

export function Map() {
  // 60.178842
  // -134.685426
  const schools: Array<School> = getSchools();
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
      {schools.map(sch => {
        return (
          <Marker position={[sch.location[0], sch.location[1]]}>
            <Popup>
              {`${sch.name}: ${sch.yearStart} - ${sch.yearEnd}`}
            </Popup>
          </Marker>)
      })}
    </MapContainer>
  );
}