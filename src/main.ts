import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { userRouter } from './routes/user'
import { jdb } from './store/json-db'
import { tableRouter } from './routes/table'
const app = express();

const PORT  = process.env.PORT || 5001
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user', userRouter)
app.use('/table',tableRouter )


const main = async () => {
  await jdb.init()
  app.listen(PORT)
  console.log(`dune BE started at: port ${PORT}`)
}

main()