import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from './config/mongoDb.js'

import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express();

const PORT = process.env.PORT || 4000

app.use(express.json());

// this is done so that we can send cookies in requests from the express app
app.use(cookieParser());

// ycors is for us to connect with the client side
// you have to set credentials: true to pass cookies from client to server
app.use(cors({origin:'http://localhost:5173', credentials: true}))

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500    
    const errorMessage = err.message || 'Something went wrong'
    return res.status(errorStatus).send(errorMessage)
})

app.get('/',(req,res)=>{
    res.send('api is working')
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);


app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})
connectDB();