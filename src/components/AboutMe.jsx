import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ duration: 0.5, ease: 'easeOut' }}
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
                // transition: 'transform 0.3s ease'
            }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >About Me</h1>
            <p style={{
                color: '#000000',
                fontSize: '1.1em',
                lineHeight: '1.6',
                marginBottom: '20px',
                // transition: 'opacity 0.3s ease'
            }}>
                Hello! I’m Aleh Kushniarou, and from childhood, I have been passionate about video games. My path in gaming began when I was 5 years old and my parents bought me my first gaming console—a Dendy 8-bit. Later, I played on a 16-bit console and a PlayStation, and after that fascinating experience, my parents bought me my first PC.
            </p>
            <img
                src="images/dendy_junior.png"
                alt="Dendy Junior"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    marginBottom: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
            />
            <p style={{
                color: '#000000',
                fontSize: '1.1em',
                lineHeight: '1.6',
                marginBottom: '20px',
                // transition: 'opacity 0.3s ease'
            }}>
                Nowadays, I have a tremendous amount of experience with different genres of games, which gives me a clear understanding of what players want to see in a game and how it should work.
                During my school days, we had a Coding Club at school where we were introduced to programming with Delphi. There was also an Adobe Flash Animation Club, but for some reason, those clubs were closed. Then, at university, I was introduced to the C language, but due to my laziness, I was excluded from the program. Later, I finished a technical university and earned a Mechanical Engineering degree.
                Time passed, and one day I realized I wanted a job where I would always gain new knowledge and have the possibility to work from any part of the world. Getting back to business, I began reading the book Head First Java and watching English videos on YouTube. Realizing that I liked solving logic tasks, and with encouragement from my brother’s, I kept going to learn coding.
                After finishing a Boot Camp Web Development course on Udemy, I made a couple of websites and continued learning English through offline courses, where I successfully achieved a B2 level. I also completed a bunch of different courses on web development. Then I started solving tasks on the LeetCode site and really enjoyed learning that.
            </p>
            <div>
                <img
                    src="images/leetCode.png"
                    alt="LeetCode Learning"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                <img
                    src="images/50tasks.png"
                    alt="LeetCode Learning"
                    style={{
                        maxWidth: '33%',
                        height: 'auto',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                />
                <img
                    src="images/100tasks.png"
                    alt="LeetCode Learning"
                    style={{
                        maxWidth: '33%',
                        height: 'auto',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                />
                <img
                    src="images/200tasks.png"
                    alt="LeetCode Learning"
                    style={{
                        maxWidth: '33%',
                        height: 'auto',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                />
            </div>
            <p style={{
                color: '#000000',
                fontSize: '1.1em',
                lineHeight: '1.6',
                marginBottom: '20px',
                // transition: 'opacity 0.3s ease'
            }}>
                After thinking about coding, the amount of gaming experience I had, and listening to my brother’s advice, I made a decision to take an offline course on Unity. I finished it successfully and gained a lot of interesting information that boosted me up.
                And now, here we are—I’m currently working on a personal project and looking for my first job to improve myself infinitely.
            </p>
        </motion.div>
    );
};

export default AboutMe;