import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const WelcomeSection = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [hoveredButton, setHoveredButton] = useState(null);
    const [tappedButton, setTappedButton] = useState(null);

    const buttonStyle = {
        backgroundColor: "var(--button-bg)",
        color: "var(--text-primary)",
        padding: "10px 20px", // Exact original size
        margin: "5px", // Exact original margin
        borderRadius: "20px",
        cursor: "pointer",
        border: "1px solid var(--border-color)",
        fontSize: "1em", // Exact original font size
        fontFamily: "Arial, sans-serif",
        fontWeight: "300", // Exact original font weight
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        position: "relative",
    };

    const handleMouseEnter = (e, buttonId) => {
        setHoveredButton(buttonId);
        e.currentTarget.style.backgroundColor = "var(--accent-color)";
        e.currentTarget.style.color = "#FFFFFF";
    };

    const handleMouseLeave = (e, buttonId) => {
        setHoveredButton(null);
        e.currentTarget.style.backgroundColor = "var(--button-bg)";
        e.currentTarget.style.color = "var(--text-primary)";
    };

    const handleMouseDown = (buttonId) => {
        setTappedButton(buttonId);
    };

    const handleMouseUp = (buttonId) => {
        setTappedButton(null);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="welcome-section"
            style={{
                maxWidth: "600px",
                textAlign: "center",
                marginTop: "60px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h1
                style={{
                    color: "var(--text-primary)",
                    fontSize: "3em",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                }}
            >
                {t("welcomeTitle")}
            </h1>
            <div
                className="buttons"
                style={{
                    margin: "20px 0",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                }}
            >
                <motion.button
                    animate={{
                        scale: hoveredButton === "about" ? 1.05 : tappedButton === "about" ? 0.98 : 1,
                    }}
                    transition={{ duration: 0.1 }}
                    style={buttonStyle}
                    onMouseEnter={(e) => handleMouseEnter(e, "about")}
                    onMouseLeave={(e) => handleMouseLeave(e, "about")}
                    onMouseDown={() => handleMouseDown("about")}
                    onMouseUp={() => handleMouseUp("about")}
                    onClick={() => navigate("/about")}
                    className="motion-button" // For CSS
                >
                    {t("aboutMeButton")}
                </motion.button>
                <motion.button
                    animate={{
                        scale: hoveredButton === "projects" ? 1.05 : tappedButton === "projects" ? 0.98 : 1,
                    }}
                    transition={{ duration: 0.1 }}
                    style={buttonStyle}
                    onMouseEnter={(e) => handleMouseEnter(e, "projects")}
                    onMouseLeave={(e) => handleMouseLeave(e, "projects")}
                    onMouseDown={() => handleMouseDown("projects")}
                    onMouseUp={() => handleMouseUp("projects")}
                    onClick={() => navigate("/projects")}
                    className="motion-button" // For CSS
                >
                    {t("projectsButton")}
                </motion.button>
                <motion.button
                    animate={{
                        scale: hoveredButton === "certificates" ? 1.05 : tappedButton === "certificates" ? 0.98 : 1,
                    }}
                    transition={{ duration: 0.1 }}
                    style={buttonStyle}
                    onMouseEnter={(e) => handleMouseEnter(e, "certificates")}
                    onMouseLeave={(e) => handleMouseLeave(e, "certificates")}
                    onMouseDown={() => handleMouseDown("certificates")}
                    onMouseUp={() => handleMouseUp("certificates")}
                    onClick={() => navigate("/certificates")}
                    className="motion-button" // For CSS
                >
                    {t("certificatesButton")}
                </motion.button>
            </div>
            <p
                style={{
                    color: "var(--text-primary)",
                    fontSize: "1em",
                    lineHeight: "1.5",
                    margin: "0",
                    padding: "0 10px",
                    fontWeight: "300",
                    transition: "opacity 0.3s ease",
                }}
            >
                {t("welcomeText")}
            </p>
        </motion.section>
    );
};

export default WelcomeSection;