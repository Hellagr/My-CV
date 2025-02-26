import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WelcomeSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="welcome-section"
            style={{
                maxWidth: '600px',
                textAlign: 'center',
                // paddingLeft: '50px',
                marginTop: '60px',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            <h1
                style={{
                    color: 'var(--text-primary)',
                    fontSize: '3em',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}
            >
                Welcome to my personal website
            </h1>
            <div
                className="buttons"
                style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        backgroundColor: 'var(--button-bg)',
                        color: 'var(--text-primary)',
                        padding: '10px 20px',
                        margin: '5px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        border: '1px solid var(--border-color)',
                        fontSize: '1em',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '300',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                        e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--button-bg)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                >
                    <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                        ABOUT ME
                    </Link>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        backgroundColor: 'var(--button-bg)',
                        color: 'var(--text-primary)',
                        padding: '10px 20px',
                        margin: '5px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        border: '1px solid var(--border-color)',
                        fontSize: '1em',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '300',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                        e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--button-bg)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                >
                    <Link to="/projects" style={{ color: 'inherit', textDecoration: 'none' }}>
                        PROJECTS
                    </Link>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        backgroundColor: 'var(--button-bg)',
                        color: 'var(--text-primary)',
                        padding: '10px 20px',
                        margin: '5px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        border: '1px solid var(--border-color)',
                        fontSize: '1em',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '300',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                        e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--button-bg)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                >
                    <Link to="/certificates" style={{ color: 'inherit', textDecoration: 'none' }}>
                        CERTIFICATES
                    </Link>
                </motion.button>
            </div>
            <p
                style={{
                    color: 'var(--text-primary)',
                    fontSize: '1em',
                    lineHeight: '1.5',
                    margin: '0',
                    padding: '0 10px',
                    fontWeight: '300',
                    transition: 'opacity 0.3s ease'
                }}
            // onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            // onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
                Seeking entry-level developer roles, including trainee positions. Just starting out after switching careers to game development which I consider my passion. Currently I’m working on a 3D rogue-like shooter as an indie dev.
            </p>
        </motion.section>
    );
};

export default WelcomeSection;