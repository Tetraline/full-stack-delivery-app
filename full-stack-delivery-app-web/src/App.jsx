import logo from "./logo.svg";
import NavBar from "./containers/NavBar/NavBar";
import Map from "./containers/Map/Map";
import SellerList from "./containers/SellerList/SellerList";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [userLocation, setUserLocation] = useState({
    lat: "none",
    lng: "none",
  });

  const getSellers = async (userLocation) => {
    const p = {};
    p.lat = Number(userLocation.lat);
    p.lng = Number(userLocation.lng);
    p.category = "food";
    const params = Object.entries(p)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = "http://localhost:8080/location/?" + params;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    // Perform the search
    getSellers(userLocation);
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
      <SellerList />
    </>
  );
}

export default App;
