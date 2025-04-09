import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Resume = () => {
    const { t } = useTranslation();

    const handleDownloadEng = () => {
        const fileUrl = "https://drive.google.com/file/d/1hod5xVDxxf-cBe-SuvGGOd93FY1fxS_l/view?usp=drive_link";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Aleh_Kushniarou_Resume_EN.docx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadRu = () => {
        const fileUrl = "https://drive.google.com/file/d/15Bh58R1LmcJdJ_UzyDECMoFY0K_SFpkE/view?usp=drive_link";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Aleh_Kushniarou_Resume_RU.docx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="page-content"
            style={{
                fontFamily: "'Arial', sans-serif",
                maxWidth: "900px",
                margin: "0 auto",
                padding: "20px",
                backgroundColor: "#1A1A1A",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                color: "#FFFFFF",
            }}
        >
            <header style={{ marginBottom: "15px", textAlign: "center" }}>
                <h1
                    style={{
                        color: "#1E90FF",
                        fontSize: "2em",
                        margin: "0 0 5px",
                        fontWeight: "700",
                        lineHeight: "1.1",
                    }}
                >
                    {t("name")}
                </h1>
                <p
                    style={{
                        color: "#B0B0B0",
                        fontSize: "0.9em",
                        lineHeight: "1.3",
                        margin: "0",
                    }}
                    dangerouslySetInnerHTML={{ __html: t("resumeContact") }}
                />
                <p
                    style={{
                        color: "#A0A0A0",
                        fontSize: "0.85em",
                        lineHeight: "1.4",
                        margin: "3px 0 0",
                    }}
                >
                    {t("resumeSummary")}
                </p>
            </header>

            <section style={{ marginBottom: "15px" }}>
                <h2
                    style={{
                        color: "#1E90FF",
                        fontSize: "1.5em",
                        margin: "0 0 6px",
                        fontWeight: "600",
                        borderBottom: "1px solid #3A3A3A",
                        paddingBottom: "2px",
                    }}
                >
                    {t("workExperienceTitle")}
                </h2>
                <div style={{ marginBottom: "10px" }}>
                    <h3 style={{ color: "#FFFFFF", fontSize: "1.1em", margin: "0 0 2px", fontWeight: "600" }}>
                        {t("systemAdministratorTitle")}
                    </h3>
                    <p style={{ color: "#B0B0B0", fontSize: "0.8em", margin: "0 0 2px", fontStyle: "italic" }}>
                        {t("systemAdministratorDetails")}
                    </p>
                    <p style={{ color: "#D0D0D0", fontSize: "0.9em", lineHeight: "1.3", margin: "0" }}>
                        {t("systemAdministratorDesc")}
                    </p>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <h3 style={{ color: "#FFFFFF", fontSize: "1.1em", margin: "0 0 2px", fontWeight: "600" }}>
                        {t("supplyEngineerTitle")}
                    </h3>
                    <p style={{ color: "#B0B0B0", fontSize: "0.8em", margin: "0 0 2px", fontStyle: "italic" }}>
                        {t("supplyEngineerDetails")}
                    </p>
                    <p style={{ color: "#D0D0D0", fontSize: "0.9em", lineHeight: "1.3", margin: "0" }}>
                        {t("supplyEngineerDesc")}
                    </p>
                </div>
            </section>

            <section style={{ marginBottom: "15px", display: "flex", gap: "20px" }}>
                <div style={{ flex: "1" }}>
                    <h2
                        style={{
                            color: "#1E90FF",
                            fontSize: "1.5em",
                            margin: "0 0 6px",
                            fontWeight: "600",
                            borderBottom: "1px solid #3A3A3A",
                            paddingBottom: "2px",
                        }}
                    >
                        {t("educationTitle")}
                    </h2>
                    <div style={{ marginBottom: "8px" }}>
                        <h3 style={{ color: "#FFFFFF", fontSize: "1.1em", margin: "0 0 2px", fontWeight: "600" }}>
                            {t("bntuTitle")}
                        </h3>
                        <p style={{ color: "#B0B0B0", fontSize: "0.8em", margin: "0", fontStyle: "italic" }}>
                            {t("bntuDetails")}
                        </p>
                    </div>
                </div>
                <div style={{ flex: "1" }}>
                    <h2
                        style={{
                            color: "#1E90FF",
                            fontSize: "1.5em",
                            margin: "0 0 6px",
                            fontWeight: "600",
                            borderBottom: "1px solid #3A3A3A",
                            paddingBottom: "2px",
                        }}
                    >
                        Certifications {/* Hardcoded to remain "Certifications" */}
                    </h2>
                    <ul
                        style={{
                            fontSize: "0.85em",
                            listStyleType: "none",
                            paddingLeft: "0",
                            margin: "0",
                            lineHeight: "1.4",
                            columnCount: 2,
                            columnGap: "15px",
                            columnWidth: "auto",
                        }}
                    >
                        <li>
                            C# Unity Developer 3D –{" "}
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7315749719954063360/" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                        <li>
                            Unity Game Dev –{" "}
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7294752105150513153/" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                        <li>
                            Web Dev Bootcamp –{" "}
                            <a href="https://www.udemy.com/certificate/UC-89dd670c-3443-4b67-ab81-ac700e3bc17c/" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                        <li>
                            Understanding TypeScript –{" "}
                            <a href="https://www.udemy.com/certificate/UC-61e0cf86-4ca5-4b2c-b8a7-6cefba2b0c6f/" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                        <li>
                            React Basics –{" "}
                            <a href="https://www.coursera.org/account/accomplishments/verify/T6RK6WNNN7GC" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                        <li>
                            React Advanced –{" "}
                            <a href="https://www.coursera.org/account/accomplishments/verify/XA7QHGSXRJ5P" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                        <li>
                            Introduction to Front-End –{" "}
                            <a href="https://www.coursera.org/account/accomplishments/verify/DYK2623K2RF8" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                        <li>
                            Version Control –{" "}
                            <a href="https://coursera.org/share/5f97b424d8fbe858269e616f235f25f0" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                        <li>
                            JavaScript –{" "}
                            <a href="https://coursera.org/share/ce797b65b849fd5ff4da8b304915e7ce" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                        <li>
                            HTML and CSS in depth –{" "}
                            <a href="https://coursera.org/share/03b93fb7f0450de9d88abd92692d869d" style={{ color: "#1E90FF" }}>
                                Cert
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section style={{ marginBottom: "15px" }}>
                <h2
                    style={{
                        color: "#1E90FF",
                        fontSize: "1.5em",
                        margin: "0 0 6px",
                        fontWeight: "600",
                        borderBottom: "1px solid #3A3A3A",
                        paddingBottom: "2px",
                    }}
                >
                    {t("gameProjectsTitle")}
                </h2>
                <div style={{ marginBottom: "8px" }}>
                    <h3 style={{ color: "#FFFFFF", fontSize: "1.1em", margin: "0 0 2px", fontWeight: "600" }}>
                        {t("stillAliveTitle")}
                    </h3>
                    <p style={{ color: "#B0B0B0", fontSize: "0.8em", margin: "0", fontStyle: "italic" }}>
                        {t("stillAliveDetails")}
                    </p>
                    <p style={{ color: "#D0D0D0", fontSize: "0.9em", lineHeight: "1.3", margin: "0" }}>
                        {t("stillAliveResumeDesc")}
                    </p>
                </div>
                <div>
                    <h3 style={{ color: "#FFFFFF", fontSize: "1.1em", margin: "0 0 2px", fontWeight: "600" }}>
                        {t("countBattleTitle")}
                    </h3>
                    <p
                        style={{ color: "#B0B0B0", fontSize: "0.8em", margin: "0", fontStyle: "italic" }}
                        dangerouslySetInnerHTML={{ __html: t("countBattleDetails") }}
                    />
                    <p style={{ color: "#D0D0D0", fontSize: "0.9em", lineHeight: "1.3", margin: "0" }}>
                        {t("countBattleDesc")}
                    </p>
                </div>
            </section>

            <section style={{ marginBottom: "15px" }}>
                <h2
                    style={{
                        color: "#1E90FF",
                        fontSize: "1.5em",
                        margin: "0 0 6px",
                        fontWeight: "600",
                        borderBottom: "1px solid #3A3A3A",
                        paddingBottom: "2px",
                    }}
                >
                    {t("webProjectsTitle")}
                </h2>
                <div style={{ marginBottom: "8px" }}>
                    <h3 style={{ color: "#FFFFFF", fontSize: "1.1em", margin: "0 0 2px", fontWeight: "600" }}>
                        {t("todoListTitle")}
                    </h3>
                    <p
                        style={{ color: "#B0B0B0", fontSize: "0.8em", margin: "0", fontStyle: "italic" }}
                        dangerouslySetInnerHTML={{ __html: t("todoListDetails") }}
                    />
                    <p style={{ color: "#D0D0D0", fontSize: "0.9em", lineHeight: "1.3", margin: "0" }}>
                        {t("todoListDesc")}
                    </p>
                </div>
                <div style={{ marginBottom: "8px" }}>
                    <h3 style={{ color: "#FFFFFF", fontSize: "1.1em", margin: "0 0 2px", fontWeight: "600" }}>
                        {t("ticTacToeTitle")}
                    </h3>
                    <p
                        style={{ color: "#B0B0B0", fontSize: "0.8em", margin: "0", fontStyle: "italic" }}
                        dangerouslySetInnerHTML={{ __html: t("ticTacToeDetails") }}
                    />
                    <p style={{ color: "#D0D0D0", fontSize: "0.9em", lineHeight: "1.3", margin: "0" }}>
                        {t("ticTacToeDesc")}
                    </p>
                </div>
                <div>
                    <h3 style={{ color: "#FFFFFF", fontSize: "1.1em", margin: "0 0 2px", fontWeight: "600" }}>
                        {t("noteAppTitle")}
                    </h3>
                    <p
                        style={{ color: "#B0B0B0", fontSize: "0.8em", margin: "0", fontStyle: "italic" }}
                        dangerouslySetInnerHTML={{ __html: t("noteAppDetails") }}
                    />
                    <p style={{ color: "#D0D0D0", fontSize: "0.9em", lineHeight: "1.3", margin: "0" }}>
                        {t("noteAppDesc")}
                    </p>
                </div>
            </section>

            <section style={{ marginBottom: "15px", display: "flex", gap: "15px" }}>
                <div style={{ flex: "1" }}>
                    <h2
                        style={{
                            color: "#1E90FF",
                            fontSize: "1.5em",
                            margin: "0 0 6px",
                            fontWeight: "600",
                            borderBottom: "1px solid #3A3A3A",
                            paddingBottom: "2px",
                        }}
                    >
                        {t("skillsTitle")}
                    </h2>
                    <ul
                        style={{
                            fontSize: "0.9em",
                            listStyleType: "none",
                            paddingLeft: "0",
                            margin: "0",
                            lineHeight: "1.4",
                        }}
                    >
                        <li>Unity, C#</li>
                        <li>HTML, CSS, JS</li>
                        <li>React, TypeScript, Node.js</li>
                        <li>MongoDB, IndexedDB</li>
                        <li>Git</li>
                        <li>Bootstrap, Material UI, Redux</li>
                    </ul>
                </div>
                <div style={{ flex: "1" }}>
                    <h2
                        style={{
                            color: "#1E90FF",
                            fontSize: "1.5em",
                            margin: "0 0 6px",
                            fontWeight: "600",
                            borderBottom: "1px solid #3A3A3A",
                            paddingBottom: "2px",
                        }}
                    >
                        {t("languagesTitle")}
                    </h2>
                    <ul
                        style={{
                            fontSize: "0.9em",
                            listStyleType: "none",
                            paddingLeft: "0",
                            margin: "0",
                            lineHeight: "1.4",
                        }}
                    >
                        <li>{t("englishLang")}</li>
                        <li>{t("russianLang")}</li>
                        <li>{t("belarusianLang")}</li>
                        <li>{t("ukrainianLang")}</li>
                    </ul>
                </div>
            </section>

            <section style={{ textAlign: "center", marginTop: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
                <button
                    onClick={handleDownloadEng}
                    style={{
                        backgroundColor: "#1E90FF",
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "5px",
                        padding: "8px 16px",
                        fontSize: "0.9em",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1669D0")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1E90FF")}
                >
                    {t("downloadEng")}
                </button>
                <button
                    onClick={handleDownloadRu}
                    style={{
                        backgroundColor: "#1E90FF",
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "5px",
                        padding: "8px 16px",
                        fontSize: "0.9em",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1669D0")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1E90FF")}
                >
                    {t("downloadRu")}
                </button>
            </section>
        </motion.div>
    );
};

export default Resume;