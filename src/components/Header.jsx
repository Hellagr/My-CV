import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Header = ({ toggleTheme, theme }) => {
    const location = useLocation();
    const isActive = (path) => (location.pathname === path ? 'active' : '');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="header"
        >
            <nav className='nav'>
                <div
                    className="header-title"
                    style={{ display: 'flex', alignItems: 'flex-end' }}
                >
                    <h1
                        style={{
                            margin: 0,
                            fontSize: '2rem',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '500',
                            letterSpacing: '1.5px',
                            color: 'var(--text-primary)',
                            position: 'relative',
                            zIndex: '1',
                            textAlign: 'left',
                            lineHeight: '1.3',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <span
                            style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: 'var(--accent-color)',
                                marginRight: '10px',
                                marginTop: '10px',
                                alignSelf: 'baseline'
                            }}
                        ></span>
                        <Link
                            to="/"
                            className="header-name" // Add this class
                            style={{
                                textDecoration: 'none',
                                color: 'var(--text-primary)',
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: '700',
                                letterSpacing: '1.5px',
                                transition: 'color 0.3s ease, transform 0.3s ease',
                                display: 'inline',
                                fontSize: '1.4rem',
                                whiteSpace: 'normal',
                                marginBottom: '5px'
                            }}
                        >
                            Aleh <br /> Kushniarou
                        </Link>
                    </h1>
                    <div
                        className="game-developer"
                        style={{
                            fontSize: '1.1rem',
                            fontWeight: '300',
                            letterSpacing: '1px',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            marginLeft: '1.5rem',
                            marginBottom: '1.5rem',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        / GAME DEVELOPER
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            color: 'var(--text-primary)',
                            padding: '5px',
                            zIndex: 1001
                        }}
                        className="nav-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>
                    <ul
                        className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}
                        style={{
                            listStyle: 'none',
                            gap: '20px',
                            margin: 0,
                            padding: '1rem'
                        }}
                    >
                        <li>
                            <Link
                                to="/"
                                className={isActive('/')}
                                style={{
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    padding: '5px 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--accent-color)';
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-primary)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={isActive('/about')}
                                style={{
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    padding: '5px 0',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--accent-color)';
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-primary)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/resume"
                                className={isActive('/resume')}
                                style={{
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    padding: '5px 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--accent-color)';
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-primary)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className={isActive('/projects')}
                                style={{
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    padding: '5px 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--accent-color)';
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-primary)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/certificates"
                                className={isActive('/certificates')}
                                style={{
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    padding: '5px 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--accent-color)';
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-primary)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                Certificates
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={isActive('/contact')}
                                style={{
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    padding: '5px 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--accent-color)';
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-primary)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            color: 'var(--text-primary)',
                            transition: 'color 0.3s ease'
                        }}
                        title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    >
                        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
                    </button>
                </div>
            </nav>
        </motion.header>
    );
};

Header.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Header;