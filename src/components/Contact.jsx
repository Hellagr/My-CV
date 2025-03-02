import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Add this import

const Contact = () => {
    const { t } = useTranslation(); // Add this hook

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
                {t("contactTitle")}
            </h1>
            <p
                style={{
                    color: "#000000",
                    fontSize: "1.1em",
                    marginBottom: "20px",
                    lineHeight: "1.6",
                    transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
                {t("contactIntro")}
            </p>
            <p
                style={{
                    color: "#000000",
                    fontSize: "1.1em",
                    marginBottom: "20px",
                    lineHeight: "1.6",
                    transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                dangerouslySetInnerHTML={{ __html: t("contactDetails") }}
            />
        </motion.div>
    );
};

export default Contact;