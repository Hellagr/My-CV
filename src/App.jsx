import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import WelcomeSection from './components/WelcomeSection.jsx';
import AboutMe from './components/AboutMe.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Certificates from './components/Certificates.jsx';
import './index.css';

function App() {
  const [theme, setTheme] = useState(() => {
    // Initial theme based on system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Sync with system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle theme manually
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply theme class to root
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <Router>
      <div
        className="App"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: 'var(--background)' // Theme variable
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
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '50px 20px',
                  backgroundColor: 'var(--background)',
                  flexWrap: 'wrap',
                  marginTop: '80px'
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
  );
}

export default App;