import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="page-content"
            style={{ fontFamily: "Arial, sans-serif" }}
        >
            <ul>
                <h1
                    style={{
                        color: "#007BFF",
                        fontSize: "2em",
                        marginBottom: "25px",
                        fontWeight: "bold",
                        lineHeight: "1.2",
                        textShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    {t("aboutMeTitle")}
                </h1>
                <li style={{ textIndent: "20px" }}>
                    <p
                        style={{
                            color: "#000000",
                            fontSize: "0.9em",
                            lineHeight: "1.6",
                            marginBottom: "20px",
                        }}
                    >
                        {t("intro")}
                    </p>
                </li>
                <img
                    src="images/dendy_junior.png"
                    alt="Dendy Junior"
                    style={{
                        display: "block",
                        marginLeft: "20%",
                        maxWidth: "50%",
                        height: "auto",
                        marginBottom: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                />
                <li style={{ textIndent: "20px" }}>
                    <p
                        style={{
                            color: "#000000",
                            fontSize: "0.9em",
                            lineHeight: "1.6",
                            marginBottom: "20px",
                        }}
                    >
                        {t("gamingExperience")}
                    </p>
                </li>
                <li style={{ textIndent: "20px" }}>
                    <p
                        style={{
                            color: "#000000",
                            fontSize: "0.9em",
                            lineHeight: "1.6",
                            marginBottom: "20px",
                        }}
                    >
                        {t("learningJourney")}
                    </p>
                </li>
                <div>
                    <img
                        src="images/leetCode.png"
                        alt="LeetCode Learning"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            marginBottom: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
                    <img
                        src="images/50tasks.png"
                        alt="LeetCode Learning"
                        style={{
                            maxWidth: "33%",
                            height: "auto",
                            marginBottom: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    <img
                        src="images/100tasks.png"
                        alt="LeetCode Learning"
                        style={{
                            maxWidth: "33%",
                            height: "auto",
                            marginBottom: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    <img
                        src="images/200tasks.png"
                        alt="LeetCode Learning"
                        style={{
                            maxWidth: "33%",
                            height: "auto",
                            marginBottom: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </div>
                <li style={{ textIndent: "20px" }}>
                    <p
                        style={{
                            color: "#000000",
                            fontSize: "0.9em",
                            lineHeight: "1.6",
                            marginBottom: "20px",
                        }}
                    >
                        {t("unityCourse")}
                    </p>
                    <p
                        style={{
                            color: "#000000",
                            fontSize: "0.9em",
                            lineHeight: "1.6",
                            marginBottom: "20px",
                        }}
                    >
                        {t("currentStatus")}
                    </p>
                </li>
                <section className="pet-projects">
                    <h2 className="project-title">{t("projectTitle")}</h2>
                    <div className="project-video">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/Qqc1XkinqSE?modestbranding=1&rel=0"
                            title="3D Rogue-Like Shooter Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p style={{ display: "none", color: "red" }} id="video-fallback">
                            Video blocked by ad blocker. Please disable it or allow YouTube to view content.
                        </p>
                    </div>
                </section>
            </ul>
        </motion.div>
    );
};

export default AboutMe;