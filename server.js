const express = require('express')
const morgan = require('morgan')
const MOVIES = require('./MOVIES.json')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use((req, res) => {
  res.send(MOVIES);
})

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})