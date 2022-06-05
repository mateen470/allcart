import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Admin from "./components/Admin";
import HomeAdmin from "./components/HomeAdmin";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Start from "./components/Start";
import Update from "./components/Update";
import View from "./components/View";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homeadmin" element={<HomeAdmin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/update" element={<Update />} />
      <Route path="/view" element={<View />} />
    </Routes>
  );
}

export default App;
