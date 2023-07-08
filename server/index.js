import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv';


dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`.cyan.underline.bold);
})

app.get('/', (req, res) => {
    res.send('Hello! ')
})


