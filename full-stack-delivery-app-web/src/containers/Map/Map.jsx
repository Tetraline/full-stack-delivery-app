import "./Map.scss";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import UserMarker from "../../components/UserMarker/UserMarker";
import SearchButton from "../../components/SearchButton/SearchButton";
import MapClickListener from "../../components/MapClickListener/MapClickListener";

const Map = ({ setUserLocation, dave }) => {
  const [selecting, setSelecting] = useState(true);
  const [map, setMap] = useState();
  const handleMapClick = () => {
    if (!selecting) {
      map.dragging.enable();
      map.touchZoom.enable();
      map.doubleClickZoom.enable();
      map.scrollWheelZoom.enable();
      map.boxZoom.enable();
      map.keyboard.enable();
      if (map.tap) map.tap.enable();
    } else {
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
      if (map.tap) map.tap.disable();
    }
    setSelecting(!selecting);
  };

  return (
    <div className={`map${selecting ? " selecting" : ""}`}>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UserMarker />
        <SearchButton setUserLocation={setUserLocation} />
        <MapClickListener handleMapClick={handleMapClick} setMap={setMap} />
      </MapContainer>
    </div>
  );
};

export default Map;
