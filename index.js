import UserRoute from './routes/UserRoute.js'
import express from 'express'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
})
app.use(UserRoute)

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})

