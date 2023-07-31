import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { userRouter } from './routes/user'
import { jdb } from './store/json-db'
const app = express();

const PORT  = process.env.PORT || 5001
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user', userRouter)


const main = async () => {
  await jdb.init()
  app.listen(PORT)
}

main()