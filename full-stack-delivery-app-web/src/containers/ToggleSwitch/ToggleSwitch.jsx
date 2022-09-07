import "./ToggleSwitch.scss";
import { useState } from "react";

const ToggleSwitch = ({ options }) => {
  const [activeOption, setActiveOption] = useState(0);
  const handleChange = (e) => {
    if (activeOption < options.length - 1) {
      setActiveOption(activeOption + 1);
    } else {
      setActiveOption(0);
    }
    e.target.classList.toggle("spin");
  };
  return (
    <>
      <button onClick={handleChange} className="toggle-switch">
        {options[activeOption]}
      </button>
    </>
  );
};

export default ToggleSwitch;
