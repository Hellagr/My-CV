import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="page-content"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            <h1 style={{
                color: '#007BFF',
                fontSize: '2.5em',
                marginBottom: '25px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
            }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >Projects</h1>
            <h2 style={{
                color: '#000000',
                fontSize: '1.5em',
                marginTop: '20px',
                marginBottom: '10px',
                fontWeight: 'bold',
                transition: 'color 0.3s ease'
            }}>3D Rogue-Like Shooter</h2>
            <p style={{
                color: '#000000',
                fontSize: '1.1em',
                marginBottom: '20px',
                lineHeight: '1.6',
                transition: 'opacity 0.3s ease'
            }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
                Currently developing a 3D rogue-like shooter as an indie game developer. This project features procedurally generated levels, dynamic AI enemies, and a unique art style inspired by classic shooters. Built using Unity and C#, with plans to release on Steam in 2025.
            </p>
            <h2 style={{
                color: '#000000',
                fontSize: '1.5em',
                marginTop: '20px',
                marginBottom: '10px',
                fontWeight: 'bold',
                transition: 'color 0.3s ease'
            }}>Previous Software Projects</h2>
            <p style={{
                color: '#000000',
                fontSize: '1.1em',
                marginBottom: '20px',
                lineHeight: '1.6',
                transition: 'opacity 0.3s ease'
            }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
                Developed several backend systems and APIs during my software engineering career, including a customer management system and a real-time data processing tool, both written in Python and deployed on AWS.
            </p>
        </motion.div>
    );
};

export default Projects;