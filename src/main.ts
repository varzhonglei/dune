import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { userRouter } from './routes/user'
import { jdb } from './store/json-db'
import { tableRouter } from './routes/table'
import { expressPort } from './libs/const'
import { initWS } from './libs/socket'
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user', userRouter)
app.use('/table',tableRouter )


const main = async () => {
  initWS()
  await jdb.init()
  app.listen(expressPort)
  console.log(`dune BE started at: port ${expressPort}`)
}
main()