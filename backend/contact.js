require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { connection } = require('./Connection/config');
const { contactUserController } = require('./contactUsers.controller');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

// const corsOptions = {
//   origin: 'https://ajay-portfolio-personal.netlify.app',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// };

// const corsOptions = {
//   origin: [/^https:\/\/ajay-portfolio-personal\.netlify\.app$/, /^http:\/\/localhost:\d+$/],
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// };

// app.use(cors(corsOptions));

// // Handle preflight requests
// app.options('*', cors(corsOptions));


// Middleware

// const allowedOrigins = [
//   'https://ajay-portfolio-personal.netlify.app',
//   'http://localhost:3000',
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like curl or mobile apps)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     } else {
//       return callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// };

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

app.use(express.json());

// Router
const contactRouter = express.Router();

contactRouter.post('/contact', contactUserController.contact);

// Mount Router

app.use('/', contactRouter);

app.listen(port, async () => {
    try {
        await connection;
        console.log("Connected with Db");
        console.log(`Server has running at http://localhost:${port}`);
    } catch (error) {
        console.log("Error: ", error);
    }
});