import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  return (
    <div className="App relative" style={{ maxWidth: "1440px" }}>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Home />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
