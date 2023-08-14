const express = require('express');
const usersRouter = require('./src/routes/users')

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello world!');
})

app.use('/users', usersRouter)

app.listen(PORT, () => {
    console.log(`the server runs on http://localhost:${PORT}`)
})