import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Add this import

const Projects = () => {
    const { t } = useTranslation(); // Add this hook

    const snapshotVideos = t("snapshotCaptions", { returnObjects: true }); // Fetch array of captions

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="page-content"
            style={{ fontFamily: "Arial, sans-serif" }}
        >
            <h1
                style={{
                    color: "#007BFF",
                    fontSize: "2.5em",
                    marginBottom: "25px",
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                {t("projectsTitle")}
            </h1>

            {/* Pet Projects Section */}
            <section className="pet-projects">
                <h2 className="project-title">{t("stillAliveTitle")}</h2>
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
                <p className="project-desc">{t("stillAliveDesc")}</p>

                <h2 className="project-title">{t("countBattleTitle")}</h2>
                <div className="project-video">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/pz97QR2lGuQ?modestbranding=1&rel=0"
                        title="Second Project Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <p style={{ display: "none", color: "red" }} id="video-fallback">
                        Video blocked by ad blocker. Please disable it or allow YouTube to view content.
                    </p>
                </div>
                <p className="project-desc">{t("countBattleDesc")}</p>
            </section>

            {/* Homework Videos Section */}
            <section className="homework-videos">
                <h2 className="project-title">{t("interestingThingsTitle")}</h2>
                <div className="video-grid">
                    {snapshotVideos.map((video, i) => (
                        <div key={i} className="video-item">
                            <iframe
                                width="100%"
                                height="150"
                                src={`https://www.youtube.com/embed/${video.videoId}?modestbranding=1&rel=0`}
                                title={`Experience ${i + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p style={{ display: "none", color: "red" }} id="video-fallback">
                                Video blocked by ad blocker. Please disable it or allow YouTube to view content.
                            </p>
                            <p className="video-caption">{video}</p>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Projects;