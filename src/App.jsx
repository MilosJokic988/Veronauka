import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import './App.css';
import Home from "./pages/Home";
import Genesis from "./pages/Genesis";
import Abraham from "./pages/Abraham";
import Jacob from "./pages/Jacob";
import Joseph from "./pages/Joseph";
import Moses from "./pages/Moses";
import Nativity from "./pages/Nativity";
import JohnBaptist from "./pages/JohnBaptist";
import Easter from "./pages/Easter";
import Miracles from "./pages/Miracles";
import AndjeoProtivDemona from './pages/AndjeoProtivDemona';
function App() {
  return (
  <Router>
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/postanje" element={<Genesis />} />
      <Route path="/avram" element={<Abraham />} />
      <Route path="/jakov" element={<Jacob />} />
      <Route path="/josif" element={<Joseph />} />
      <Route path="/mojsije" element={<Moses />} />
      <Route path="/bozic" element={<Nativity />} />
      <Route path="/jovan-krstitelj" element={<JohnBaptist />} />
      <Route path="/vaskrs" element={<Easter />} />
      <Route path="/hristova-cuda" element={<Miracles />} />
      <Route path="/andjeo-protiv-demona" element={<AndjeoProtivDemona />} /> {/* ← nova ruta */}
    </Route>
  </Routes>
</Router>
  );
}

export default App;
