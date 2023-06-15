import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: any, res: any) => {
  res.send('Worked successfully but husky problem!')
})

export default app
