import mongoose from 'mongoose';

const connectDB = async() =>{
    
    // the below line will be executed when db connects
    mongoose.connection.on('connected',()=>{
        console.log("db connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/mern-project`)

}

export default connectDB;