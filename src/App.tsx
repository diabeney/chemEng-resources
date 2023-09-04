import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Resources from "./Pages/Resources/Resources";
import NotFound from "./Pages/NotFound";
import { ToggleTheme } from "./components/ThemeWrapper";
import CourseDetails from "./Pages/Resources/CourseDetails";
import NavBar from "./components/NavBar";
import ResourcesIndex from "./Pages/Resources/ResourcesIndex";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { theme } = useContext(ToggleTheme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses-overview" element={<Resources />}>
            <Route index element={<ResourcesIndex />} />
            <Route path=":year/:id" element={<CourseDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
