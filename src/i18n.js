import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
    en: {
        translation: {
            // Header translations
            name: "Aleh Kushniarou",
            home: "Home",
            aboutMe: "About Me",
            cv: "CV",
            projects: "Projects",
            certificates: "Certificates",
            contact: "Contact",
            gameDeveloper: "Game Developer",

            // AboutMe translations
            aboutMeTitle: "About Me",
            intro: "Hello! My name is Aleh Kushniarou, and I’ve been passionate about video games since childhood. My journey in gaming began at the age of 5 when my parents bought me my first gaming console—a Dendy 8-bit. Later, I played on a 16-bit console and a PlayStation, and after that, my parents got me my first computer.",
            gamingExperience: "Today, I have 28 years of gaming experience across various genres, which gives me a clear understanding of what players want in a game and how it should function. I still love playing video games and spend a lot of my free time on them.",
            learningJourney: "A few years ago, I realized I wanted a job that would allow me to constantly acquire new knowledge and work from anywhere in the world. In short, I started reading the book *Head First Java* and teaching myself English through YouTube video tutorials. Realizing that I enjoyed solving logical problems, and with the support of my brothers, I continued to learn programming. After completing a Boot Camp Web Development course on Udemy, I built a couple of websites and continued studying English through offline courses, reaching a B2 level in one year. I also completed numerous web development courses. Later, I began solving problems on LeetCode and genuinely enjoyed the learning process.",
            unityCourse: "After reflecting on my programming skills, gaming experience, and my brother’s advice, I decided to take an offline Unity course. I completed it successfully, achieving the best result in the group, and gained a wealth of inspiring information.",
            currentStatus: "And here we are—currently, I’m working on a personal project and looking for my first job to continuously improve myself.",
            projectTitle: "Still Alive (current project)",
            //Welcome section
            welcomeTitle: "Hi and Welcome!",
            aboutMeButton: "About Me",
            projectsButton: "Projects",
            certificatesButton: "Certificates",
            welcomeText: "Looking for a job as a Unity junior developer or intern. Currently, I’m working on my indie project — a 3D rogue-like shooter",
            // Add Projects translations
            projectsTitle: "Projects",
            stillAliveTitle: "Still alive (current project)",
            stillAliveDesc: "Currently developing a 3D rogue-like shooter. This will be dynamic shooter with evolving player progression. Built using Unity and C#, with plans to release on Steam.",
            countBattleTitle: "Count Battle",
            countBattleDesc: "A casual game where you pick the right answer to simple equations. Perfect for kids and students to practice math, or adults looking to test their school-day memory.",
            interestingThingsTitle: "Some Interesting Things I have Worked On",
            snapshotCaptions: [
                { videoId: "ugkbmyZDq-g", caption: "Horror like game. Infinity floors" },
                { videoId: "MEPLc65_d2k", caption: "Isometric. Displacement along the axis of movement" },
                { videoId: "AjQANLxZhhw", caption: "Mario like game. Joints" },
                { videoId: "dW5DxvLuQuk", caption: "Mesh generation. Prefabs are prohibited." },
            ],
            // Add Certificates translations
            certificatesTitle: "Certificates",
            gameDevelopment: "Game Development",
            programmingLanguages: "Programming Languages",
            webDevelopment: "Web Development",
            versionControl: "Version Control",
            english: "English",
            // Add Contact translations
            contactTitle: "Contact",
            contactIntro: "I’d love to hear from you! Whether you’re interested in collaborating on a game project, discussing a job opportunity, or just want to connect, feel free to reach out.",
            contactDetails: "<strong>Email:</strong> alehkushniarou@gmail.com<br /><strong>Phone:</strong> +375 (44) 768-01-77<br /><strong>LinkedIn:</strong> <a href=\"https://www.linkedin.com/in/aleh-kushniarou-18996a254/\" target=\"_blank\" style=\"color: '#007BFF', textDecoration: 'none', transition: 'color 0.3s ease'\">Aleh Kushniarou</a><br /><strong>Telegram:</strong> <a href=\"https://t.me/Hellagrr\" target=\"_blank\" style=\"color: '#007BFF', textDecoration: 'none', transition: 'color 0.3s ease'\">@Hellagrr</a>",
            // Resume translations
            resumeContact: "Minsk, Belarus | alehkushniarou@gmail.com | +375 44 768-01-77<br /><a href=\"https://www.linkedin.com/in/aleh-kushniarou-18996a254/\" style=\"color: '#1E90FF', textDecoration: 'none'\">LinkedIn</a> | <a href=\"https://t.me/Hellagrr\" style=\"color: '#1E90FF', textDecoration: 'none'\">Telegram</a> | <a href=\"https://github.com/Hellagr\" style=\"color: '#1E90FF', textDecoration: 'none'\">GitHub</a> | <a href=\"https://leetcode.com/alehkushniarou/\" style=\"color: '#1E90FF', textDecoration: 'none'\">LeetCode</a>",
            resumeSummary: "Hello. Looking for entry-level developer roles (ready to take on a trainee role). Actively enhancing my development skills by working on a personal 3D rogue-like shooter project and expanding my knowledge along the way. A tremendous amount of gaming experience has given me an understanding of what users want to see in a game and how it should work.",
            workExperienceTitle: "Work Experience",
            systemAdministratorTitle: "System Administrator",
            systemAdministratorDetails: "Minsk | 2024 – Present",
            systemAdministratorDesc: "Maintain PC software functionality and resolve OS issues, ensuring seamless system performance through proactive support and troubleshooting.",
            supplyEngineerTitle: "Engineer of Materials and Technical Supply",
            supplyEngineerDetails: "Minsk | 2016 – 2023",
            supplyEngineerDesc: "Oversaw material procurement for production, driving efficiency with strong organizational skills.",
            educationTitle: "Education",
            bntuTitle: "BNTU",
            bntuDetails: "Minsk | 2012 – 2018",
            gameProjectsTitle: "Game Projects",
            stillAliveDetails: "2024 – Present | Unity, C#",
            stillAliveResumeDesc: "3D rogue-like shooter blending gaming insight with technical skill.",
            countBattleDetails: "2023 | Unity, C# – <a href=\"https://www.linkedin.com/feed/update/urn:li:activity:7240047327590125569/\" style=\"color: '#1E90FF'\">Details</a>",
            webProjectsTitle: "Web Projects",
            todoListTitle: "ToDo List App",
            todoListDetails: "<a href=\"http://todocard.onrender.com/\" style=\"color: '#1E90FF'\">Demo</a> | <a href=\"https://github.com/Hellagr/todoJka\" style=\"color: '#1E90FF'\">GitHub</a>",
            todoListDesc: "Note-taking app: HTML, CSS, Bootstrap, JavaScript, Node.js, npm, MongoDB.",
            ticTacToeTitle: "Tic-Tac-Toe",
            ticTacToeDetails: "<a href=\"https://hellagr.github.io/tic-tac-toe/\" style=\"color: '#1E90FF'\">Demo</a> | <a href=\"https://github.com/Hellagr/tic-tac-toe\" style=\"color: '#1E90FF'\">GitHub</a>",
            ticTacToeDesc: "React-based tic-tac-toe game: HTML, CSS, React (Vite).",
            noteAppTitle: "Note App",
            noteAppDetails: "<a href=\"https://hellagr.github.io/ReactTypescriptNotes/\" style=\"color: '#1E90FF'\">Demo</a> | <a href=\"https://github.com/Hellagr/ReactTypescriptNotes\" style=\"color: '#1E90FF'\">GitHub</a>",
            noteAppDesc: "Note-taking app: HTML, CSS, React, TypeScript, Redux, Material UI, IndexedDB.",
            skillsTitle: "Skills",
            languagesTitle: "Languages",
            downloadEng: "Download CV Eng",
            downloadRu: "Download CV Ru",
            englishLang: "English (B2)",
            russianLang: "Russian (Native)",
            belarusianLang: "Belarusian (Native)",
            ukrainianLang: "Ukrainian",
        },
    },
    ru: {
        translation: {
            // Header translations
            name: "Олег Кушнеров",
            home: "Главная",
            aboutMe: "Обо мне",
            cv: "Резюме",
            projects: "Проекты",
            certificates: "Сертификаты",
            contact: "Контакты",
            gameDeveloper: "Game Developer",

            // AboutMe translations
            aboutMeTitle: "Обо мне",
            intro: "Привет! Меня зовут Олег Кушнеров, и с детства я увлекаюсь видеоиграми. Мой путь в видеоиграх начался, когда мне было 5 лет и родители купили мне мою первую игровую консоль — Dendy 8-бит. Позже я играл на 16-битной консоли и PlayStation, а после этого родители купили мне мой первый компьютер.",
            gamingExperience: "Сейчас я имею 28 лет игрового опыта в играх разных жанров, что дает мне четкое понимание того, что игроки хотят видеть в игре и как она должна работать. Я все еще люблю играть в видеоигры и провожу за ними много свободного времени.",
            learningJourney: "Несколько лет назад я понял, что хочу работу, где я буду постоянно получать новые знания и смогу работать из любой точки мира. Короче говоря, я начал читать книгу Head First Java и самообучаться английскому языку по видеоурокам на YouTube. Поняв, что мне нравится решать логические задачи, и с поддержкой моих братьев, я продолжил изучать программирование. После завершения курса Boot Camp Web Development по веб-разработке на Udemy я создал пару сайтов и продолжил изучать английский на оффлайн-курсах, где за год достиг уровня B2. Также я прошел множество курсов по веб-разработке. Затем я начал решать задачи на сайте LeetCode и действительно полюбил этот процесс обучения.",
            unityCourse: "Обдумав программирование, мой игровой опыт и советы брата, я решил пройти оффлайн-курс по Unity. Я успешно завершил его с лучшим результатом в группе и получил много интересной информации, которая меня вдохновила.",
            currentStatus: "И вот мы здесь — сейчас я работаю над личным проектом и ищу свою первую работу, чтобы бесконечно совершенствоваться.",
            projectTitle: "Still alive (текущий проект)",
            //Welcome section
            welcomeTitle: "Привет и добро пожаловать!",
            aboutMeButton: "Обо мне",
            projectsButton: "Проекты",
            certificatesButton: "Сертификаты",
            welcomeText: "Ищу работу Unity junior-разработчиком или стажером. Сейчас работаю над своим инди-проектом — 3D rogue-like шутер.",
            // Add Projects translations
            projectsTitle: "Проекты",
            stillAliveTitle: "Still alive (текущий проект)",
            stillAliveDesc: "В настоящее время разрабатываю 3D rogue-like shooter. Это будет динамичный shooter с развивающимся прогрессом игрока. Создаётся с использованием Unity и C#, с планами на выпуск в Steam.",
            countBattleTitle: "Count Battle",
            countBattleDesc: "Казуальная игра, где нужно выбрать правильный ответ на простые уравнения. Идеально подходит для детей и студентов для практики математики или для взрослых, желающих проверить свои школьные знания.",
            interestingThingsTitle: "Некоторые интересные вещи, над которыми я работал",
            snapshotCaptions: [
                { videoId: "ugkbmyZDq-g", caption: "Horror like game. Бесконечные этажи" },
                { videoId: "MEPLc65_d2k", caption: "Isometric. Смещение по оси движения" },
                { videoId: "AjQANLxZhhw", caption: "Mario like game. Joints" },
                { videoId: "dW5DxvLuQuk", caption: "Mesh generation. Префабы запрещены." }
            ],
            // Add Certificates translations
            certificatesTitle: "Сертификаты",
            gameDevelopment: "Разработка игр",
            programmingLanguages: "Языки программирования",
            webDevelopment: "Веб-разработка",
            versionControl: "Контроль версий",
            english: "Английский",
            // Add Contact translations
            contactTitle: "Контакты",
            contactIntro: "Буду рад услышать вас! Если вы хотите обсудить сотрудничество над игровым проектом, предложить вакансию или просто связаться, не стесняйтесь обращаться.",
            contactDetails: "<strong>Email:</strong> alehkushniarou@gmail.com<br /><strong>Phone:</strong> +375 (44) 768-01-77<br /><strong>LinkedIn:</strong> <a href=\"https://www.linkedin.com/in/aleh-kushniarou-18996a254/\" target=\"_blank\" style=\"color: '#007BFF', textDecoration: 'none', transition: 'color 0.3s ease'\">Олег Кушнеров</a><br /><strong>Telegram:</strong> <a href=\"https://t.me/Hellagrr\" target=\"_blank\" style=\"color: '#007BFF', textDecoration: 'none', transition: 'color 0.3s ease'\">@Hellagrr</a>",
            // Resume translations
            resumeContact: "Минск, Беларусь | alehkushniarou@gmail.com | +375 44 768-01-77<br /><a href=\"https://www.linkedin.com/in/aleh-kushniarou-18996a254/\" style=\"color: '#1E90FF', textDecoration: 'none'\">LinkedIn</a> | <a href=\"https://t.me/Hellagrr\" style=\"color: '#1E90FF', textDecoration: 'none'\">Telegram</a> | <a href=\"https://github.com/Hellagr\" style=\"color: '#1E90FF', textDecoration: 'none'\">GitHub</a> | <a href=\"https://leetcode.com/alehkushniarou/\" style=\"color: '#1E90FF', textDecoration: 'none'\">LeetCode</a>",
            resumeSummary: "Привет. Ищу роли разработчика начального уровня (готов к роли стажёра). Активно улучшаю навыки разработки, работая над личным проектом 3D rogue-like shooter и расширяя знания в процессе. Огромный игровой опыт дал мне понимание того, что пользователи хотят видеть в играх и как они должны работать.",
            workExperienceTitle: "Опыт работы",
            systemAdministratorTitle: "Системный администратор",
            systemAdministratorDetails: "Минск | 2024 – Настоящее время",
            systemAdministratorDesc: "Поддерживаю функциональность ПО на ПК и решаю проблемы с ОС, обеспечивая бесперебойную работу системы через проактивную поддержку и устранение неполадок.",
            supplyEngineerTitle: "Инженер по материалам и техническому снабжению",
            supplyEngineerDetails: "Минск | 2016 – 2023",
            supplyEngineerDesc: "Контролировал закупку материалов для производства, повышая эффективность благодаря сильным организаторским навыкам.",
            educationTitle: "Образование",
            bntuTitle: "БНТУ",
            bntuDetails: "Минск | 2012 – 2018",
            gameProjectsTitle: "Игровые проекты",
            stillAliveDetails: "2024 – Настоящее время | Unity, C#",
            stillAliveResumeDesc: "3D rogue-like shooter, сочетающий игровую интуицию с техническими навыками.",
            countBattleDetails: "2023 | Unity, C# – <a href=\"https://www.linkedin.com/feed/update/urn:li:activity:7240047327590125569/\" style=\"color: '#1E90FF'\">Подробности</a>",
            webProjectsTitle: "Веб-проекты",
            todoListTitle: "ToDo List App",
            todoListDetails: "<a href=\"http://todocard.onrender.com/\" style=\"color: '#1E90FF'\">Демо</a> | <a href=\"https://github.com/Hellagr/todoJka\" style=\"color: '#1E90FF'\">GitHub</a>",
            todoListDesc: "Приложение для заметок: HTML, CSS, Bootstrap, JavaScript, Node.js, npm, MongoDB.",
            ticTacToeTitle: "Tic-Tac-Toe",
            ticTacToeDetails: "<a href=\"https://hellagr.github.io/tic-tac-toe/\" style=\"color: '#1E90FF'\">Демо</a> | <a href=\"https://github.com/Hellagr/tic-tac-toe\" style=\"color: '#1E90FF'\">GitHub</a>",
            ticTacToeDesc: "Игра крестики-нолики на React: HTML, CSS, React (Vite).",
            noteAppTitle: "Note App",
            noteAppDetails: "<a href=\"https://hellagr.github.io/ReactTypescriptNotes/\" style=\"color: '#1E90FF'\">Демо</a> | <a href=\"https://github.com/Hellagr/ReactTypescriptNotes\" style=\"color: '#1E90FF'\">GitHub</a>",
            noteAppDesc: "Приложение для заметок: HTML, CSS, React, TypeScript, Redux, Material UI, IndexedDB.",
            skillsTitle: "Навыки",
            languagesTitle: "Языки",
            downloadEng: "Скачать CV Eng",
            downloadRu: "Скачать CV Ru",
            englishLang: "Английский (B2)",
            russianLang: "Русский",
            belarusianLang: "Белорусский",
            ukrainianLang: "Украинский",
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;