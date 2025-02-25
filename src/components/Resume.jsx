import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="page-content"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            <h1
                style={{
                    color: '#007BFF',
                    fontSize: '2.5em',
                    marginBottom: '25px',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                Resume
            </h1>
            <h2
                style={{
                    color: '#000000',
                    fontSize: '1.5em',
                    marginTop: '20px',
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    transition: 'color 0.3s ease'
                }}
            >
                Aleh Kushniarou
            </h2>
            <p
                style={{
                    color: '#000000',
                    fontSize: '1.1em',
                    marginBottom: '15px',
                    lineHeight: '1.6',
                    transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
                Game Developer / Software Engineer
            </p>
            <h3
                style={{
                    color: '#007BFF',
                    fontSize: '1.3em',
                    marginTop: '20px',
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    transition: 'color 0.3s ease'
                }}
            >
                Professional Experience
            </h3>
            <p
                style={{
                    color: '#000000',
                    fontSize: '1.1em',
                    marginBottom: '15px',
                    lineHeight: '1.6',
                    transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
                <strong>Software Engineer</strong> – Previous Role (2018-2023)<br />
                Developed robust software solutions, focusing on backend systems and API integration. Gained experience in Python, Java, and cloud technologies.
            </p>
            <h3
                style={{
                    color: '#007BFF',
                    fontSize: '1.3em',
                    marginTop: '20px',
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    transition: 'color 0.3s ease'
                }}
            >
                Education
            </h3>
            <p
                style={{
                    color: '#000000',
                    fontSize: '1.1em',
                    marginBottom: '15px',
                    lineHeight: '1.6',
                    transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
                Bachelor of Science in Computer Science – University Name (2014-2018)
            </p>
            <h3
                style={{
                    color: '#007BFF',
                    fontSize: '1.3em',
                    marginTop: '20px',
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    transition: 'color 0.3s ease'
                }}
            >
                Skills
            </h3>
            <ul
                style={{
                    color: 'var(--text-primary)', // Updated to theme variable
                    fontSize: '1.1em',
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    marginBottom: '20px',
                    lineHeight: '1.6',
                    transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
                <li>Game Development (Unity, Unreal Engine)</li>
                <li>Programming (C#, C++, Python, JavaScript)</li>
                <li>3D Modeling & Animation</li>
                <li>Agile Development & Team Collaboration</li>
            </ul>
        </motion.div>
    );
};

export default Resume;