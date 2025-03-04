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
        padding: "10px 20px",
        margin: "5px",
        borderRadius: "20px",
        cursor: "pointer",
        border: "1px solid var(--border-color)",
        fontSize: "1em",
        fontFamily: "Arial, sans-serif",
        fontWeight: "300",
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

    const handleDownloadEng = () => {
        const fileUrl = "https://drive.google.com/uc?export=download&id=1hod5xVDxxf-cBe-SuvGGOd93FY1fxS_l";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Aleh_Kushniarou_Resume_EN.docx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadRu = () => {
        const fileUrl = "https://drive.google.com/uc?export=download&id=1WlTuwhy9mFy1n8b2PTDS27SC1XzV1mQc";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Aleh_Kushniarou_Resume_RU.docx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                    className="motion-button"
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
                    className="motion-button"
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
                    className="motion-button"
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
            <div
                className="resume-buttons"
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
                        scale: hoveredButton === "downloadEng" ? 1.05 : tappedButton === "downloadEng" ? 0.98 : 1,
                    }}
                    transition={{ duration: 0.1 }}
                    style={buttonStyle}
                    onMouseEnter={(e) => handleMouseEnter(e, "downloadEng")}
                    onMouseLeave={(e) => handleMouseLeave(e, "downloadEng")}
                    onMouseDown={() => handleMouseDown("downloadEng")}
                    onMouseUp={() => handleMouseUp("downloadEng")}
                    onClick={handleDownloadEng}
                    className="motion-button"
                >
                    {t("downloadEng")}
                </motion.button>
                <motion.button
                    animate={{
                        scale: hoveredButton === "downloadRu" ? 1.05 : tappedButton === "downloadRu" ? 0.98 : 1,
                    }}
                    transition={{ duration: 0.1 }}
                    style={buttonStyle}
                    onMouseEnter={(e) => handleMouseEnter(e, "downloadRu")}
                    onMouseLeave={(e) => handleMouseLeave(e, "downloadRu")}
                    onMouseDown={() => handleMouseDown("downloadRu")}
                    onMouseUp={() => handleMouseUp("downloadRu")}
                    onClick={handleDownloadRu}
                    className="motion-button"
                >
                    {t("downloadRu")}
                </motion.button>
            </div>
        </motion.section>
    );
};

export default WelcomeSection;