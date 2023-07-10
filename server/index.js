import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv';
import router from './routes/UserRoutes.js';
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000
import { errorHandler, notFound } from './middlewares/ErrorMiddleware.js';


app.use('/api', router)
app.use(errorHandler)
app.use(notFound)
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`.cyan.underline.bold);
})

app.get('/', (req, res) => {
    res.send('Hello! ')
})


