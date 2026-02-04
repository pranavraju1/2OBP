import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'

const app = express();

const PORT = process.env.PORT || 4000

app.use(express.json());

// this is done so that we can send cookies in requests from the express app
app.use(cookieParser());

// you have to set it true to connect backed with frontend
app.use(cors({credentials: true}));

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})