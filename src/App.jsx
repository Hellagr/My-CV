import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Resume from "./components/Resume.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Certificates from "./components/Certificates.jsx";
import "./index.css";
import "./i18n";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setTheme(e.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const enforceMinWidth = () => {
      if (window.innerWidth < 385) {
        document.body.style.width = "385px";
        document.body.style.overflowX = "hidden";
      } else {
        document.body.style.width = "auto";
      }
    };

    window.addEventListener("resize", enforceMinWidth);
    enforceMinWidth();

    return () => window.removeEventListener("resize", enforceMinWidth);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div
          className="App"
          style={{
            maxWidth: "1200px",
            minWidth: "385px",
            margin: "0 auto",
            minHeight: "100vh",
            backgroundColor: "var(--background)",
          }}
        >
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Routes>
            <Route
              path="/"
              element={
                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "50px 20px",
                    backgroundColor: "var(--background)",
                    marginTop: "80px",
                  }}
                >
                  <ProfileCard />
                  <WelcomeSection />
                </div>
              }
            />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;