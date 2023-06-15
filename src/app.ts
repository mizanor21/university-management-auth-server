import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: ) => {
  res.send('Worked successfully!')
})

export default app
