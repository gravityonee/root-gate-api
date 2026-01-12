import express from 'express'
import apiRouter from '@/routes/api.route'
import { errorHandler } from '@/middlewares/error.middleware'
import { env } from '@/env'

const app = express()
const PORT = 3000

app.use('/api', apiRouter)

app.use(errorHandler)

app.listen(PORT, () => console.log(`[Root Gate API] listening on ${env.PORT}`))