import { useEffect } from "react";
import { useMapEvents, useMap } from "react-leaflet";

const MapClickListener = ({ handleMapClick, setMap }) => {
  const map = useMap();
  //Pass up map object for Map.jsx to use
  useEffect(() => {
    setMap(map);
  }, [map, setMap]);

  useMapEvents({
    click() {
      handleMapClick();
    },
  });
  return <></>;
};
export default MapClickListener;
