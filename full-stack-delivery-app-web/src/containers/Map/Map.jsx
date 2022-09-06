import "./Map.scss";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import UserMarker from "../../components/UserMarker/UserMarker";
import SearchButton from "../../components/SearchButton/SearchButton";

const Map = ({ setUserLocation, dave }) => {
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UserMarker />
        <SearchButton setUserLocation={setUserLocation} />
      </MapContainer>
    </>
  );
};

export default Map;
