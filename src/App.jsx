import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DestinationsPage from "./pages/DestinationsPage";
import About from "./pages/About";
import DestinationDetails from "./pages/DestinationDetails";
import MyTrips from "./pages/MyTrips";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/destinations/:name" element={<DestinationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;