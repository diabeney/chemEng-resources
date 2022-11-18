import { ThemeProvider } from "styled-components";
import { COLORS } from "./constants/style-constants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import Contribute from "./Pages/Contribute";
import Resources from "./Pages/Resources";
import NotFound from "./Pages/NotFound";

function App() {
  const theme = COLORS.LIGHT;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
