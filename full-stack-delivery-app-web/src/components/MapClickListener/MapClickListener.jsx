import { useMapEvents } from "react-leaflet";

const MapClickListener = ({ handleMapClick }) => {
  useMapEvents({
    click() {
      handleMapClick();
    },
  });
  return <></>;
};
export default MapClickListener;
