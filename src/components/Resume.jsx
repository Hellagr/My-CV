import { motion } from 'framer-motion';

const Resume = () => {
    // Functions to trigger file downloads for ENG and RU versions from the current site
    const handleDownloadEng = () => {
        // Use a relative path from the /public folder
        const fileUrl = 'https://drive.google.com/uc?export=download&id=1cYKiG_ztOWXUC4-oBHNC6gY99TETMPNZ'; // Path to English resume in /public/TxtResume folder
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Aleh_Kushniarou_Resume_EN.docx'; // Updated to match .docx file extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadRu = () => {
        // Use a relative path from the /public folder
        const fileUrl = 'https://drive.google.com/uc?export=download&id=1OaQqa65p1ivvRRgQR150lhr1-olbPu5I'; // Path to Russian resume in /public/TxtResume folder
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Aleh_Kushniarou_Resume_RU.docx'; // Updated to match .docx file extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="page-content"
            style={{
                fontFamily: "'Arial', sans-serif",
                maxWidth: '900px',
                margin: '0 auto',
                padding: '20px',
                backgroundColor: '#1A1A1A', // Dark background
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                color: '#FFFFFF', // Default text color for dark background
            }}
        >
            <header style={{ marginBottom: '15px', textAlign: 'center' }}>
                <h1
                    style={{
                        color: '#1E90FF', // Bright blue for name
                        fontSize: '2em',
                        margin: '0 0 5px',
                        fontWeight: '700',
                        lineHeight: '1.1',
                    }}
                >
                    Aleh Kushniarou
                </h1>
                <p
                    style={{
                        color: '#B0B0B0', // Light gray for contact
                        fontSize: '0.9em',
                        lineHeight: '1.3',
                        margin: '0',
                    }}
                >
                    Minsk, Belarus | alehkushniarou@gmail.com | +375 44 768-01-77<br />
                    <a href="https://www.linkedin.com/in/aleh-kushniarou-18996a254/" style={{ color: '#1E90FF', textDecoration: 'none' }}>LinkedIn</a> |{' '}
                    <a href="https://t.me/Hellagrr" style={{ color: '#1E90FF', textDecoration: 'none' }}>Telegram</a> |{' '}
                    <a href="https://github.com/Hellagr" style={{ color: '#1E90FF', textDecoration: 'none' }}>GitHub</a> |{' '}
                    <a href="https://leetcode.com/alehkushniarou/" style={{ color: '#1E90FF', textDecoration: 'none' }}>LeetCode</a>
                </p>
                <p
                    style={{
                        color: '#A0A0A0', // Slightly lighter gray for summary
                        fontSize: '0.85em',
                        lineHeight: '1.4',
                        margin: '3px 0 0',
                    }}
                >
                    Hello. Looking for entry-level developer roles (ready to take on a trainee role). Actively enhancing my development skills by working on a personal 3D rogue-like shooter project and expanding my knowledge along the way. A tremendous amount of gaming experience has given me an understanding of what users want to see in a game and how it should work.
                </p>
            </header>

            <section style={{ marginBottom: '15px' }}>
                <h2
                    style={{
                        color: '#1E90FF', // Blue for headings
                        fontSize: '1.5em',
                        margin: '0 0 6px',
                        fontWeight: '600',
                        borderBottom: '1px solid #3A3A3A', // Subtle dark border
                        paddingBottom: '2px',
                    }}
                >
                    Work Experience
                </h2>
                <div style={{ marginBottom: '10px' }}>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.1em', margin: '0 0 2px', fontWeight: '600' }}>
                        System Administrator
                    </h3>
                    <p style={{ color: '#B0B0B0', fontSize: '0.8em', margin: '0 0 2px', fontStyle: 'italic' }}>
                        OOO «Boho studio», Minsk | 2024 – Present
                    </p>
                    <p style={{ color: '#D0D0D0', fontSize: '0.9em', lineHeight: '1.3', margin: '0' }}>
                        Maintain PC software functionality and resolve OS issues, ensuring seamless system performance through proactive support and troubleshooting.
                    </p>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.1em', margin: '0 0 2px', fontWeight: '600' }}>
                        Engineer of Materials and Technical Supply
                    </h3>
                    <p style={{ color: '#B0B0B0', fontSize: '0.8em', margin: '0 0 2px', fontStyle: 'italic' }}>
                        Institut BELORGSTANKINPROM, Minsk | 2016 – 2023
                    </p>
                    <p style={{ color: '#D0D0D0', fontSize: '0.9em', lineHeight: '1.3', margin: '0' }}>
                        Oversaw material procurement for production, driving efficiency with strong organizational skills.
                    </p>
                </div>
            </section>

            <section style={{ marginBottom: '15px', display: 'flex', gap: '20px' }}>
                <div style={{ flex: '1' }}>
                    <h2
                        style={{
                            color: '#1E90FF',
                            fontSize: '1.5em',
                            margin: '0 0 6px',
                            fontWeight: '600',
                            borderBottom: '1px solid #3A3A3A',
                            paddingBottom: '2px',
                        }}
                    >
                        Education
                    </h2>
                    <div style={{ marginBottom: '8px' }}>
                        <h3 style={{ color: '#FFFFFF', fontSize: '1.1em', margin: '0 0 2px', fontWeight: '600' }}>
                            BNTU
                        </h3>
                        <p style={{ color: '#B0B0B0', fontSize: '0.8em', margin: '0', fontStyle: 'italic' }}>
                            Minsk | 2012 – 2018
                        </p>
                    </div>
                    <div>
                        <h3 style={{ color: '#FFFFFF', fontSize: '1.1em', margin: '0 0 2px', fontWeight: '600' }}>
                            BSUIR (Incomplete)
                        </h3>
                        <p style={{ color: '#B0B0B0', fontSize: '0.8em', margin: '0', fontStyle: 'italic' }}>
                            Minsk | 1 Year
                        </p>
                    </div>
                </div>
                <div style={{ flex: '1' }}>
                    <h2
                        style={{
                            color: '#1E90FF',
                            fontSize: '1.5em',
                            margin: '0 0 6px',
                            fontWeight: '600',
                            borderBottom: '1px solid #3A3A3A',
                            paddingBottom: '2px',
                        }}
                    >
                        Certifications
                    </h2>
                    <ul
                        style={{
                            fontSize: '0.85em',
                            listStyleType: 'none',
                            paddingLeft: '0',
                            margin: '0',
                            lineHeight: '1.4',
                            columnCount: 2,
                            columnGap: '15px',
                            columnWidth: 'auto',
                        }}
                    >
                        <li>Unity Game Dev – <a href="https://www.linkedin.com/feed/update/urn:li:activity:7294752105150513153/" style={{ color: '#1E90FF' }}>Cert</a></li>
                        <li>Web Dev Bootcamp – <a href="https://www.udemy.com/certificate/UC-89dd670c-3443-4b67-ab81-ac700e3bc17c/" style={{ color: '#1E90FF' }}>Cert</a></li>
                        <li>Understanding TypeScript – <a href="https://www.udemy.com/certificate/UC-61e0cf86-4ca5-4b2c-b8a7-6cefba2b0c6f/" style={{ color: '#1E90FF' }}>Cert</a></li>
                        <li>React Basics – <a href="https://www.coursera.org/account/accomplishments/verify/T6RK6WNNN7GC" style={{ color: '#1E90FF' }}>Cert</a></li>
                        <li>React Advanced – <a href="https://www.coursera.org/account/accomplishments/verify/XA7QHGSXRJ5P" style={{ color: '#1E90FF' }}>Cert</a></li>
                        <li>Introduction to Front-End – <a href="https://www.coursera.org/account/accomplishments/verify/DYK2623K2RF8" style={{ color: '#1E90FF' }}>Cert</a></li>
                        <li>Version Control – <a href="https://coursera.org/share/5f97b424d8fbe858269e616f235f25f0" style={{ color: '#1E90FF' }}>Cert</a></li>
                        <li>JavaScript – <a href="https://coursera.org/share/ce797b65b849fd5ff4da8b304915e7ce" style={{ color: '#1E90FF' }}>Cert</a></li>
                        <li>HTML and CSS in depth – <a href="https://coursera.org/share/03b93fb7f0450de9d88abd92692d869d" style={{ color: '#1E90FF' }}>Cert</a></li>
                    </ul>
                </div>
            </section>

            <section style={{ marginBottom: '15px' }}>
                <h2
                    style={{
                        color: '#1E90FF',
                        fontSize: '1.5em',
                        margin: '0 0 6px',
                        fontWeight: '600',
                        borderBottom: '1px solid #3A3A3A',
                        paddingBottom: '2px',
                    }}
                >
                    Game Projects
                </h2>
                <div style={{ marginBottom: '8px' }}>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.1em', margin: '0 0 2px', fontWeight: '600' }}>
                        Still Alive
                    </h3>
                    <p style={{ color: '#B0B0B0', fontSize: '0.8em', margin: '0', fontStyle: 'italic' }}>
                        2024 – Present | Unity, C#
                    </p>
                    <p style={{ color: '#D0D0D0', fontSize: '0.9em', lineHeight: '1.3', margin: '0' }}>
                        3D rogue-like shooter blending gaming insight with technical skill.
                    </p>
                </div>
                <div>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.1em', margin: '0 0 2px', fontWeight: '600' }}>
                        Count Battle
                    </h3>
                    <p style={{ color: '#B0B0B0', fontSize: '0.8em', margin: '0', fontStyle: 'italic' }}>
                        2023 | Unity, C# – <a href="https://www.linkedin.com/feed/update/urn:li:activity:7240047327590125569/" style={{ color: '#1E90FF' }}>Details</a>
                    </p>
                    <p style={{ color: '#D0D0D0', fontSize: '0.9em', lineHeight: '1.3', margin: '0' }}>
                        Early Unity project showcasing rapid learning.
                    </p>
                </div>
            </section>

            <section style={{ marginBottom: '15px' }}>
                <h2
                    style={{
                        color: '#1E90FF',
                        fontSize: '1.5em',
                        margin: '0 0 6px',
                        fontWeight: '600',
                        borderBottom: '1px solid #3A3A3A',
                        paddingBottom: '2px',
                    }}
                >
                    Web Projects
                </h2>
                <div style={{ marginBottom: '8px' }}>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.1em', margin: '0 0 2px', fontWeight: '600' }}>
                        ToDo List App
                    </h3>
                    <p style={{ color: '#B0B0B0', fontSize: '0.8em', margin: '0', fontStyle: 'italic' }}>
                        <a href="http://todocard.onrender.com/" style={{ color: '#1E90FF' }}>Demo</a> |{' '}
                        <a href="https://github.com/Hellagr/todoJka" style={{ color: '#1E90FF' }}>GitHub</a>
                    </p>
                    <p style={{ color: '#D0D0D0', fontSize: '0.9em', lineHeight: '1.3', margin: '0' }}>
                        Note-taking app: HTML, CSS, Bootstrap, JavaScript, Node.js, npm, MongoDB.
                    </p>
                </div>
                <div style={{ marginBottom: '8px' }}>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.1em', margin: '0 0 2px', fontWeight: '600' }}>
                        Tic-Tac-Toe
                    </h3>
                    <p style={{ color: '#B0B0B0', fontSize: '0.8em', margin: '0', fontStyle: 'italic' }}>
                        <a href="https://hellagr.github.io/tic-tac-toe/" style={{ color: '#1E90FF' }}>Demo</a> |{' '}
                        <a href="https://github.com/Hellagr/tic-tac-toe" style={{ color: '#1E90FF' }}>GitHub</a>
                    </p>
                    <p style={{ color: '#D0D0D0', fontSize: '0.9em', lineHeight: '1.3', margin: '0' }}>
                        React-based tic-tac-toe game: HTML, CSS, React (Vite).
                    </p>
                </div>
                <div>
                    <h3 style={{ color: '#FFFFFF', fontSize: '1.1em', margin: '0 0 2px', fontWeight: '600' }}>
                        Note App
                    </h3>
                    <p style={{ color: '#B0B0B0', fontSize: '0.8em', margin: '0', fontStyle: 'italic' }}>
                        <a href="https://hellagr.github.io/ReactTypescriptNotes/" style={{ color: '#1E90FF' }}>Demo</a> |{' '}
                        <a href="https://github.com/Hellagr/ReactTypescriptNotes" style={{ color: '#1E90FF' }}>GitHub</a>
                    </p>
                    <p style={{ color: '#D0D0D0', fontSize: '0.9em', lineHeight: '1.3', margin: '0' }}>
                        Note-taking app: HTML, CSS, React, TypeScript, Redux, Material UI, IndexedDB.
                    </p>
                </div>
            </section>

            <section style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: '1' }}>
                    <h2
                        style={{
                            color: '#1E90FF',
                            fontSize: '1.5em',
                            margin: '0 0 6px',
                            fontWeight: '600',
                            borderBottom: '1px solid #3A3A3A',
                            paddingBottom: '2px',
                        }}
                    >
                        Skills
                    </h2>
                    <ul
                        style={{
                            fontSize: '0.9em',
                            listStyleType: 'none',
                            paddingLeft: '0',
                            margin: '0',
                            lineHeight: '1.4',
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
                <div style={{ flex: '1' }}>
                    <h2
                        style={{
                            color: '#1E90FF',
                            fontSize: '1.5em',
                            margin: '0 0 6px',
                            fontWeight: '600',
                            borderBottom: '1px solid #3A3A3A',
                            paddingBottom: '2px',
                        }}
                    >
                        Languages
                    </h2>
                    <ul
                        style={{
                            fontSize: '0.9em',
                            listStyleType: 'none',
                            paddingLeft: '0',
                            margin: '0',
                            lineHeight: '1.4',
                        }}
                    >
                        <li>English (B2)</li>
                        <li>Russian (Native)</li>
                        <li>Belarusian (Native)</li>
                        <li>Ukrainian</li>
                    </ul>
                </div>
            </section>

            <section style={{ textAlign: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <button
                    onClick={handleDownloadEng}
                    style={{
                        backgroundColor: '#1E90FF',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '8px 16px',
                        fontSize: '0.9em',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1669D0')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1E90FF')}
                >
                    Download ENG
                </button>
                <button
                    onClick={handleDownloadRu}
                    style={{
                        backgroundColor: '#1E90FF',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '8px 16px',
                        fontSize: '0.9em',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1669D0')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1E90FF')}
                >
                    Download RU
                </button>
            </section>
        </motion.div>
    );
};

export default Resume;