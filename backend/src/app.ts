import { PORT } from './config/config'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})