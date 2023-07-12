import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv';
import router from './routes/UserRoutes.js';
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000
import { errorHandler, notFound } from './middlewares/ErrorMiddleware.js';
import connectDb from './db/config.js';


/*
express.json(): This middleware is responsible for parsing incoming requests with JSON payloads. It enables Express to automatically parse the request body if it's in JSON format. It sets the req.body property to contain the parsed JSON data, making it accessible in subsequent route handlers. This middleware is typically used for handling API requests that send data in JSON format.
*/
app.use(express.json())
/**
 * express.urlencoded({ extended: true }): This middleware is used to parse incoming requests with URL-encoded payloads. It enables Express to automatically parse the request body if it's in the format of URL-encoded data. The extended: true option allows the parsing of rich objects and arrays, while extended: false only supports simpler data structures. Similar to express.json(), this middleware sets the req.body property to contain the parsed data, allowing access to it in subsequent route handlers. This middleware is commonly used for processing form submissions or requests that send data as URL-encoded parameters.
 */
app.use(express.urlencoded({extended: true}))
app.use('/api/auth', router)
app.use(errorHandler)
app.use(notFound)
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`.cyan.underline.bold);
})

app.get('/', (req, res) => {
    res.send('Hello! ')
})
connectDb()


