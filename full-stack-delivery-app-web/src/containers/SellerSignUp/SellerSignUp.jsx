import "./SellerSignUp.scss";
import { useState } from "react";

const SellerSignUp = () => {
  const [userMessage, setUserMessage] = useState("");
  const keys = ["lat", "lng", "name", "category", "description"];
  const innerFormJSX = keys.map((key) => (
    <div key={key} className="form-group">
      <label htmlFor={key}>{key}</label>
      <input name={key} id={key} className="form-control"></input>
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
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossOrigin="anonymous"
      ></link>
      <h1>Seller sign up</h1>
      {innerFormJSX}
      <input onClick={handleSubmit} type="submit" value="Submit" />
      <h2>{userMessage}</h2>
    </form>
  );
};

export default SellerSignUp;
