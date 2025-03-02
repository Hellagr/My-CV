import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Add this import

const Certificates = () => {
    const { t } = useTranslation(); // Add this hook
    const [selectedImage, setSelectedImage] = useState(null);

    const openFullSize = (src) => {
        setSelectedImage(src);
    };

    const closeFullSize = () => {
        setSelectedImage(null);
    };

    // Translation mapping for categories
    const certificateData = {
        [t("gameDevelopment")]: [
            { src: "images/cetificates/Mobile Game Development With Unity.jpg", title: "Mobile Game Development With Unity" },
        ],
        [t("programmingLanguages")]: [
            { src: "images/cetificates/Programming with Javascript.jpeg", title: "Programming with Javascript" },
            { src: "images/cetificates/Understanding Typescript.jpg", title: "Understanding Typescript" },
        ],
        [t("webDevelopment")]: [
            { src: "images/cetificates/Introduction to Front-End Development.jpeg", title: "Introduction to Front-End Development" },
            { src: "images/cetificates/HTML and CSS in depth.jpeg", title: "HTML and CSS in depth" },
            { src: "images/cetificates/React Basics.jpeg", title: "React Basics" },
            { src: "images/cetificates/Advanced React.jpeg", title: "Advanced React" },
            { src: "images/cetificates/The Web Developer Bootcamp 2022.png", title: "The Web Developer Bootcamp 2022" },
        ],
        [t("versionControl")]: [
            { src: "images/cetificates/Version Control.jpeg", title: "Version Control" },
        ],
        [t("english")]: [
            { src: "images/cetificates/b1.jpg", title: "Intermediate (B1)" },
            { src: "images/cetificates/b2.jpg", title: "Upper Intermediate (B2)" },
        ],
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="page-content"
            style={{
                fontFamily: "Arial, sans-serif",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "30px 20px",
            }}
        >
            <h1
                style={{
                    color: "var(--accent-color)",
                    fontSize: "2em",
                    marginBottom: "30px",
                    fontWeight: "700",
                    textAlign: "left",
                    paddingLeft: "10px",
                    letterSpacing: "0.5px",
                }}
            >
                {t("certificatesTitle")}
            </h1>

            {Object.entries(certificateData).map(([category, certs]) => (
                <div key={category}>
                    <h2
                        style={{
                            color: "var(--text-primary)",
                            fontSize: "1.5em",
                            paddingTop: "40px",
                            paddingBottom: "15px",
                            fontWeight: "600",
                            textAlign: "center",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                        }}
                    >
                        {category}
                    </h2>
                    <div className="certsBlocks">
                        {certs.map((cert, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: "0 0 250px",
                                    textAlign: "center",
                                    background: "var(--card-bg)",
                                    borderRadius: "10px",
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    padding: "10px",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
                                }}
                            >
                                <img
                                    src={cert.src}
                                    alt={cert.title}
                                    style={{
                                        width: "100%",
                                        height: "150px",
                                        objectFit: "contain",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => openFullSize(cert.src)}
                                />
                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        fontSize: "0.9em",
                                        marginTop: "10px",
                                        fontWeight: "400",
                                        lineHeight: "1.3",
                                        padding: "0 5px",
                                    }}
                                >
                                    {cert.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {selectedImage && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                        overflow: "auto",
                    }}
                    onClick={closeFullSize}
                >
                    <img
                        src={selectedImage}
                        alt="Full Size Certificate"
                        style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                            objectFit: "contain",
                            borderRadius: "8px",
                            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                    />
                    <button
                        style={{
                            position: "absolute",
                            top: "15px",
                            right: "15px",
                            background: "rgba(255, 255, 255, 0.1)",
                            border: "none",
                            color: "#fff",
                            fontSize: "1.8em",
                            cursor: "pointer",
                            padding: "5px 10px",
                            borderRadius: "50%",
                            transition: "background 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
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