import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="profile-card"
            style={{
                backgroundColor: '#FFFFFFF',
                padding: '30px',
                borderRadius: '5px',
                width: '350px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                fontFamily: 'Arial, sans-serif',
                marginTop: '0px'
            }}
        >
            <img
                src="/public/images/photo.jpg"
                alt="Aleh Kushniarou"
                className="profile-image"
                style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '20px',
                    border: '4px solid #FFFFFF',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <h2
                style={{
                    color: '#000000',
                    margin: '15px 0 20px',
                    fontSize: '2em',
                    fontWeight: '900',
                    lineHeight: '1.2',
                    transition: 'color 0.3s ease',
                    letterSpacing: '1px',
                    fontFamily: "'Poppins', sans-serif",
                    wordBreak: 'break-word',
                    maxWidth: '280px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            >
                Aleh Kushniarou
            </h2>
            <div
                style={{
                    width: '60px',
                    height: '2px',
                    backgroundColor: '#007BFF',
                    margin: '10px auto'
                }}
            ></div>
            <p
                style={{
                    color: '#5f5f5f',
                    margin: '20px auto 0',
                    fontSize: '1em',
                    fontWeight: '300',
                    lineHeight: '1.5',
                    letterSpacing: '1px',
                    transition: 'color 0.3s ease',
                    fontFamily: "'Roboto', sans-serif",
                    wordWrap: 'break-word',
                    maxWidth: '280px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            >
                GAME DEVELOPER /
            </p>
            <p
                style={{
                    color: '#5f5f5f',
                    margin: '0px auto',
                    fontSize: '1em',
                    fontWeight: '300',
                    lineHeight: '1.5',
                    letterSpacing: '1px',
                    transition: 'color 0.3s ease',
                    fontFamily: "'Roboto', sans-serif",
                    wordWrap: 'break-word',
                    maxWidth: '280px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            >
                SOFTWARE ENGINEER
            </p>
            <div
                className="social-links"
                style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}
            >
                <a
                    href="https://www.linkedin.com/in/aleh-kushniarou-18996a254/"
                    target="_blank"
                    style={{
                        color: '#333333',
                        textDecoration: 'none',
                        fontSize: '2em',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#007BFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#333333')}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://t.me/Hellagrr"
                    target="_blank"
                    style={{
                        color: '#333333',
                        textDecoration: 'none',
                        fontSize: '2em',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#007BFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#333333')}
                >
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a
                    href="https://github.com/Hellagr"
                    target="_blank"
                    style={{
                        color: '#333333',
                        textDecoration: 'none',
                        fontSize: '2em',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#007BFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#333333')}
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://leetcode.com/u/alehkushniarou/"
                    target="_blank"
                    style={{
                        color: '#333333',
                        textDecoration: 'none',
                        fontSize: '2em',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#007BFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#333333')}
                >
                    <FontAwesomeIcon icon={faCode} />
                </a>
            </div>
        </motion.div>
    );
};

export default ProfileCard;