import { PORT, DB_URL } from './config/config'
import express from 'express'
import { Sequelize } from 'sequelize'

const db = new Sequelize(DB_URL)
db.authenticate()
  .then(() => console.log('Connected to the database!'))
  .catch((error: any) => console.log(`Error when connecting to the database: ${error}`))

const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})