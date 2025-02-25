import { motion } from 'framer-motion';

const AboutMe = () => {
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
            >About Me</h1>
            <p style={{
                color: '#000000',
                fontSize: '1.1em',
                lineHeight: '1.6',
                marginBottom: '20px',
                transition: 'opacity 0.3s ease'
            }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
                Hello! I’m Aleh Kushniarou, a passionate game developer and software engineer transitioning into the gaming industry. With a strong background in software engineering, I’m now focusing on creating engaging 3D games, starting with my current project—a 3D rogue-like shooter as an indie developer. I’m seeking entry-level or trainee roles to kickstart my career in game development and bring my creative vision to life.
            </p>
            <p style={{
                color: '#000000',
                fontSize: '1.1em',
                lineHeight: '1.6',
                marginBottom: '20px',
                transition: 'opacity 0.3s ease'
            }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
                I have a keen interest in procedural generation, AI for game mechanics, and immersive player experiences. Outside of coding, I enjoy exploring new technologies, playing video games, and learning about game design principles.
            </p>
        </motion.div>
    );
};

export default AboutMe;