import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Articles from "./Pages/Articles";
import Contribute from "./Pages/Contribute";
import Resources from "./Pages/Resources/Resources";
import NotFound from "./Pages/NotFound";
import { ToggleTheme } from "./components/ThemeWrapper";

function App() {
  const { theme } = useContext(ToggleTheme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
