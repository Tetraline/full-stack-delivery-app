//import "./SellerSignUp.scss";

const SellerSignUp = () => {
  const keys = ["lat", "lng", "name", "category", "description"];
  const innerFormJSX = keys.map((key) => (
    <div key={key}>
      <label htmlFor={key}>{key}</label>
      <input name={key} id={key}></input>
    </div>
  ));
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const formDataJSON = JSON.stringify(Object.fromEntries(formData));
    fetch("http://localhost:8080/addSeller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formDataJSON,
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form>
      <h1>Seller sign up form</h1>
      <p>Fill in the following details and we will add you to our platform.</p>
      {innerFormJSX}
      <input onClick={handleSubmit} type="submit" value="Submit" />
    </form>
  );
};

export default SellerSignUp;
