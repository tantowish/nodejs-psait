import UserRoute from './routes/UserRoute.js'
import express from 'express'
import dotenv from 'dotenv';
import PostRoute from './routes/PostRoute.js';
import cors from 'cors'
dotenv.config();

const app = express()
const port = process.env.PORT

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
};

app.use(cors(corsOptions));

app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
})

app.use(UserRoute)
app.use(PostRoute)

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port http://localhost:${port}`);
})

