import { motion } from 'framer-motion';

const Contact = () => {
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
            >Contact</h1>
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
                I’d love to hear from you! Whether you’re interested in collaborating on a game project, discussing a job opportunity, or just want to connect, feel free to reach out.
            </p>
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
                <strong>Email:</strong> alehkushniarou@gmail.com<br />
                <strong>Phone:</strong> +375 (44) 543-50-47<br />
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aleh-kushniarou-18996a254/" target="_blank" style={{ color: '#007BFF', textDecoration: 'none', transition: 'color 0.3s ease' }}>Aleh Kushniarou</a><br />
                <strong>Telegram:</strong> <a href="https://t.me/Hellagrr" target="_blank" style={{ color: '#007BFF', textDecoration: 'none', transition: 'color 0.3s ease' }}>@Hellagrr</a>
            </p>
        </motion.div>
    );
};

export default Contact;