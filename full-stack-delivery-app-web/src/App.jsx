import CustomerApp from "./containers/CustomerApp/CustomerApp";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellerSignUp from "./containers/SellerSignUp/SellerSignUp";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerApp />} />
        <Route path="/seller-sign-up" element={<SellerSignUp />} />
      </Routes>
    </Router>
  );
};
export default App;
