import { motion } from 'framer-motion';
import { useState } from 'react';

const Certificates = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openFullSize = (src) => {
        setSelectedImage(src);
    };

    const closeFullSize = () => {
        setSelectedImage(null);
    };

    const certificateData = {
        "Game Development": [
            { src: "/public/images/cetificates/Mobile Game Development With Unity.jpg", title: "Mobile Game Development With Unity" }
        ],
        "Programming Languages": [
            { src: "/public/images/cetificates/Programming with Javascript.jpeg", title: "Programming with Javascript" },
            { src: "/public/images/cetificates/Understanding Typescript.jpg", title: "Understanding Typescript" }
        ],
        "Web Development": [
            { src: "/public/images/cetificates/Introduction to Front-End Development.jpeg", title: "Introduction to Front-End Development" },
            { src: "/public/images/cetificates/HTML and CSS in depth.jpeg", title: "HTML and CSS in depth" },
            { src: "/public/images/cetificates/React Basics.jpeg", title: "React Basics" },
            { src: "/public/images/cetificates/Advanced React.jpeg", title: "Advanced React" },
            { src: "/public/images/cetificates/The Web Developer Bootcamp 2022.png", title: "The Web Developer Bootcamp 2022" }
        ],
        "Version Control": [
            { src: "/public/images/cetificates/Version Control.jpeg", title: "Version Control" }
        ],
        "English": [
            { src: "/public/images/cetificates/b1.jpg", title: "Intermediate (B1)" },
            { src: "/public/images/cetificates/b2.jpg", title: "Upper Intermediate (B2)" }
        ]
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="page-content"
            style={{
                fontFamily: 'Arial, sans-serif',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '30px 20px'
            }}
        >
            <h1
                style={{
                    color: 'var(--accent-color)', // Updated to theme variable
                    fontSize: '2em',
                    marginBottom: '30px',
                    fontWeight: '700',
                    textAlign: 'left',
                    paddingLeft: '10px',
                    letterSpacing: '0.5px'
                }}
            >
                Certificates
            </h1>

            {Object.entries(certificateData).map(([category, certs]) => (
                <div key={category} style={{ marginBottom: '40px' }}>
                    <h2
                        style={{
                            color: 'var(--text-primary)', // Updated to theme variable
                            fontSize: '1.5em',
                            paddingTop: '40px',
                            paddingBottom: '15px',
                            fontWeight: '600',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        {category}
                    </h2>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '15px',
                            padding: '0 10px'
                        }}
                    >
                        {certs.map((cert, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: '0 0 250px',
                                    textAlign: 'center',
                                    background: 'var(--card-bg)', // Updated to theme variable (was '#fff')
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                                    padding: '10px',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <img
                                    src={cert.src}
                                    alt={cert.title}
                                    style={{
                                        width: '100%',
                                        height: '150px',
                                        objectFit: 'contain',
                                        borderRadius: '6px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => openFullSize(cert.src)}
                                />
                                <p
                                    style={{
                                        color: 'var(--text-secondary)', // Updated to theme variable
                                        fontSize: '0.9em',
                                        marginTop: '10px',
                                        fontWeight: '400',
                                        lineHeight: '1.3',
                                        padding: '0 5px'
                                    }}
                                >
                                    {cert.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Full-Size Modal */}
            {selectedImage && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        overflow: 'auto'
                    }}
                    onClick={closeFullSize}
                >
                    <img
                        src={selectedImage}
                        alt="Full Size Certificate"
                        style={{
                            width: 'auto',
                            height: 'auto',
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    />
                    <button
                        style={{
                            position: 'absolute',
                            top: '15px',
                            right: '15px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: 'none',
                            color: '#fff',
                            fontSize: '1.8em',
                            cursor: 'pointer',
                            padding: '5px 10px',
                            borderRadius: '50%',
                            transition: 'background 0.3s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
                        onClick={closeFullSize}
                    >
                        ✕
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default Certificates;