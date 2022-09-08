//import "./SellerSignUp.scss";
import { useState } from "react";

const SellerSignUp = () => {
  const [userMessage, setUserMessage] = useState("");
  const keys = ["lat", "lng", "name", "category", "description"];
  const innerFormJSX = keys.map((key) => (
    <div key={key}>
      <label htmlFor={key}>{key}</label>
      <input name={key} id={key}></input>
    </div>
  ));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const formDataJSON = JSON.stringify(Object.fromEntries(formData));
    const response = await fetch("http://localhost:8080/addSeller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formDataJSON,
    });
    const data = await response.json();
    if (response.ok) {
      setUserMessage(data.message);
    } else {
      setUserMessage(
        `${data.message}. Error code: ${response.status}. Not added to database.`
      );
    }
  };
  return (
    <form>
      <h1>Seller sign up form</h1>
      <p>Fill in the following details and we will add you to our platform.</p>
      {innerFormJSX}
      <input onClick={handleSubmit} type="submit" value="Submit" />
      <h2>{userMessage}</h2>
    </form>
  );
};

export default SellerSignUp;
