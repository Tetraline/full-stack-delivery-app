import logo from "./logo.svg";
import NavBar from "./containers/NavBar/NavBar";
import Map from "./containers/Map/Map";
import SellerList from "./containers/SellerList/SellerList";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const defaultLocation = {
    lat: "none",
    lng: "none",
  };
  const [userLocation, setUserLocation] = useState(defaultLocation);
  const [sellers, setSellers] = useState([]);

  const getSellersAndDisplay = async (userLocation) => {
    const p = {};
    p.lat = Number(userLocation.lat);
    p.lng = Number(userLocation.lng);
    p.category = "food";
    const params = Object.entries(p)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = "http://localhost:8080/location/?" + params;
    const res = await fetch(url);
    const data = await res.json();
    setSellers(data);
  };

  useEffect(() => {
    getSellersAndDisplay(userLocation);
  }, [userLocation]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      <NavBar />
      <h2>Select your location</h2>
      <Map setUserLocation={setUserLocation} dave="married" />
      <h2>Results</h2>
      <h3>{userLocation.lat}</h3>
      <h3>{userLocation.lng}</h3>
      <SellerList sellers={sellers} />
    </>
  );
}

export default App;
