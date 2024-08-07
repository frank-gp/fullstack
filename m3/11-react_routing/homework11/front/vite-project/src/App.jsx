import NavBar from "./components/Navbar/NavBar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ width: "70vw", margin: "auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mis-turnos" element={<MisTurnos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
