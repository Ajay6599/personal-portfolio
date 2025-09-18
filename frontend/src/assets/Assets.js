import AjayImg from './Ajay Prajapati.jpg';
import AjayBg from './Ajay_Prajapati_bg.png';
import { FaRegMap } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import WeatherAppImg from './WeatherApp.png';
import LmsImage from './LMS.png';
import AjayCv from './Ajay Resume.pdf';

export const userImage = {
    AjayImg,
    AjayBg
}

export const educationData = [
    {
        university: 'DUCAT IT Training School, Noida',
        course: 'MERN Full Stack Web Developer',
        year: '2024-2025',
        description: 'Trained in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js, with hands-on projects covering frontend, backend, and REST API integration.',
    },
    {
        university: 'Dr. APJ Abdul Kalam Technical University, Lucknow',
        course: 'Master of Computer Application',
        year: '2020-2022',
        description: 'Focused on full stack development, data structures, and software engineering.',
    },
    {
        university: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
        course: 'Bachelor of Science (Computer Application)',
        year: '2017-2020',
        description: 'Studied core programming concepts and database systems.',
    },
    {
        university: `St. Francis Xavier's Inter College, Kanpur`,
        course: 'Intermediate',
        year: '2015-2017',
        description: 'Specialized in Physics, Chemistry, and Computer Science.',
    },
    {
        university: `St. Francis Xavier's Inter College, Kanpur`,
        course: 'High School',
        year: '2014-2015',
        description: 'Completed secondary education with a focus on Science and Mathematics.',
    },
];

export const skills = [
    {
        lang: "HTML",
        level: 80,
        desc: "Proficient in writing semantic HTML and structuring responsive layouts.",
    },
    {
        lang: "CSS",
        level: 80,
        desc: "Experienced in styling layouts using Flexbox, Grid, and media queries.",
    },
    {
        lang: "Javascript",
        level: 75,
        desc: "Comfortable with ES6+, DOM manipulation, and problem-solving with JS.",
    },
    {
        lang: "React",
        level: 75,
        desc: "Capable of building component-based UIs, handling props/state, and using hooks.",
    },
    {
        lang: "Node Js",
        level: 65,
        desc: "Basic understanding of backend development and REST APIs using Node.js.",
    },
    {
        lang: "Express Js",
        level: 65,
        desc: "Familiar with setting up routes, middleware, and building server-side logic.",
    },
    {
        lang: "MongoDb",
        level: 65,
        desc: "Knowledge of data modeling, CRUD operations, and using Mongoose in projects.",
    },
];

export const personalData = [
    {
        text: "Address",
        info: "Jareeb Chowki, Kanpur, Uttar Pradesh",
        contact: <FaRegMap size='20' />
    },
    {
        text: "Email",
        info: "ajayprajapati6599@gmail.com",
        contact: <MdOutlineEmail size='20' />
    },
    {
        text: "Mobile",
        info: "8887763091, 8896788572",
        contact: <RiContactsBook2Line size='20' />
    },
];

export const projectDetails = [
    {
        projImg: WeatherAppImg,
        projType: "Frontend Project",
        // projDesc: "A responsive weather forecasting app that allows users to search for current weather conditions in any city using real-time data from the OpenWeatherMap API.",
        projDesc: "A simple weather app that displays real-time weather data using the OpenWeatherMap API.",
        projTech: "HTML, CSS, Javascript",
        projLink: 'https://weathermapweb.netlify.app/',
        projGithub: 'https://github.com/Ajay6599/Projects/tree/main/Weather%20App'
    },
    {
        projImg: LmsImage,
        projType: "Mern Full Stack Project",
        // projDesc: "A full-stack library management system that enables users to manage book inventory, issue/return books, and track borrowing records with secure user authentication and role-based access.",
        projDesc: "A MERN stack app to manage books, users, and borrowing records with role-based access.",
        projTech: "ReactJs, MongoDb, ExpressJs, NodeJs",
        projLink: 'https://bookverselibrary.netlify.app/',
        projGithub: 'https://github.com/Ajay6599/Projects/tree/main/Library%20Management%20System'
    },
];

export const resume = {
    AjayCv
};

export const randomCode = {
    frontendSnippets: [
        `const [count, setCount] = useState(0);`,
        `useEffect(() => { fetchData(); }, []);`,
        `return <div className="App">Hello World</div>;`,
        `button.addEventListener('click', handleClick);`,
        `const theme = localStorage.getItem("theme");`,
        `document.querySelector("#root").innerHTML = "<h1>React!</h1>";`,
    ],
    backendSnippets: [
        `const express = require('express');`,
        `mongoose.connect(process.env.MONGO_URI);`,
        `app.get('/api/posts', async (req, res) => {...});`,
        `const user = await User.findById(req.params.id);`,
        `res.status(500).json({ error: err.message });`,
        `const token = jwt.sign({ id: user._id }, secret);`
    ]
};

export const codeBlocks = [
    {
        id: 1,
        frontendSnippets: [
            `const [count, setCount] = useState(0);`,
            `useEffect(() => { fetchData(); }, []);`,
            `return <div className="App">Hello World</div>;`,
            `button.addEventListener('click', handleClick);`,
            `const theme = localStorage.getItem("theme");`,
            `document.querySelector("#root").innerHTML = "<h1>React!</h1>";`,
        ],
        speed: 5,
        initialTop: "10%",
        initialLeft: "10%"
    },
    {
        id: 2,
        backendSnippets: [
            `const express = require('express');`,
            `mongoose.connect(process.env.MONGO_URI);`,
            `app.get('/api/posts', async (req, res) => {...});`,
            `const user = await User.findById(req.params.id);`,
            `res.status(500).json({ error: err.message });`,
            `const token = jwt.sign({ id: user._id }, secret);`
        ],
        speed: 7,
        initialTop: "40%",
        initialLeft: "70%"
    }
];