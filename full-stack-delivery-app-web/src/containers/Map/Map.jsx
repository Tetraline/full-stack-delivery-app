import "./Map.scss";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import UserMarker from "../../components/UserMarker/UserMarker";
import SearchButton from "../../components/SearchButton/SearchButton";
import MapClickListener from "../../components/MapClickListener/MapClickListener";

const Map = ({ setUserLocation }) => {
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
      setSelecting(!selecting);
      setTimeout(() => map.invalidateSize(), 1);
    } else {
      const userLocation = map.getCenter();
      setSelecting(!selecting);
      setTimeout(() => map.invalidateSize(), 1);
      setUserLocation(userLocation);
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
      if (map.tap) map.tap.disable();
    }
  };

  return (
    <div className={`map${selecting ? " selecting" : ""}`}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        whenReady={(map) => setMap(map.target)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UserMarker />
        <SearchButton setUserLocation={setUserLocation} />
        <MapClickListener handleMapClick={handleMapClick} />
      </MapContainer>
    </div>
  );
};

export default Map;
