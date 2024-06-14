import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Team from "./pages/Team.jsx";
import Philosophy from "./pages/Philosophy.jsx";
import Stories from "./pages/Stories.jsx";
import Jobs from "./pages/Jobs.jsx";
import Nomads from "./pages/Nomads.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/philosophy" element={<Philosophy />} />
        <Route exact path="/stories" element={<Stories />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/nomads" element={<Nomads />} />
      </Routes>
    </Router>
  );
}

export default App;