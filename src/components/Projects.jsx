import { motion } from 'framer-motion';

const Projects = () => {

    const snapshotVideos = [
        { videoId: 'ugkbmyZDq-g', caption: 'Horror like game. Infinity floors' },
        { videoId: 'MEPLc65_d2k', caption: 'Isometric. Displacement along the axis of movement' },
        { videoId: 'AjQANLxZhhw', caption: 'Mario like game. Joints' },
        { videoId: 'dW5DxvLuQuk ', caption: 'Mesh generation. Prefabs are prohibited.' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="page-content"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            <h1 style={{
                color: '#007BFF',
                fontSize: '2.5em',
                marginBottom: '25px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease'
            }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >Projects</h1>

            {/* Pet Projects Section */}
            <section className="pet-projects">
                <h2 className="project-title">Still alive (current project)</h2>
                <div className="project-video">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/Qqc1XkinqSE"
                        title="3D Rogue-Like Shooter Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="project-desc">
                    Currently developing a 3D rogue-like shooter. This will be dynamic shooter with evolving player progression. Built using Unity and C#, with plans to release on Steam.
                </p>

                <h2 className="project-title">Count Battle</h2>
                <div className="project-video">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/pz97QR2lGuQ"
                        title="Second Project Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="project-desc">
                    A casual game where you pick the right answer to simple equations. Perfect for kids and students to practice math, or adults looking to test their school-day memory.
                </p>
            </section>

            {/* Homework Videos Section */}
            <section className="homework-videos">
                <h2 className="project-title">Primitive Game Mechanics Experience</h2>
                <div className="video-grid">
                    {snapshotVideos.map((video, i) => (
                        <div key={i} className="video-item">
                            <iframe
                                width="100%"
                                height="150"
                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                title={`Experience ${i + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p className="video-caption">{video.caption}</p>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Projects;