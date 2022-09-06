import "./UserMarker.scss";
import markerImage from "../../assets/images/marker.svg";

const UserMarker = ({ position }) => {
  return <img src={markerImage} alt="marker" className="user-marker" />;
};

export default UserMarker;
