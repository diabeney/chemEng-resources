import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Articles from "./Pages/Articles";
import Contribute from "./Pages/Contribute";
import Resources from "./Pages/Resources/Resources";
import NotFound from "./Pages/NotFound";
import { ToggleTheme } from "./components/ThemeWrapper";
import CourseDetails from "./Pages/Resources/CourseDetails";
import NavBar from "./components/NavBar";
import ResourcesIndex from "./Pages/Resources/ResourcesIndex";

function App() {
  const { theme } = useContext(ToggleTheme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/resources" element={<Resources />}>
            <Route index element={<ResourcesIndex />} />
            <Route path=":id" element={<CourseDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
