import { useMap } from "react-leaflet";
import "./SearchButton.scss";

const SearchButton = ({ setUserLocation }) => {
  const map = useMap();
  const handleSearch = () => {
    // setUserLocation(map.getCenter());
    // does nothing
  };
  return (
    <button onClick={handleSearch} className="search-button">
      Search
    </button>
  );
};
export default SearchButton;
