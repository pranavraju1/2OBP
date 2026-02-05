import User from '../models/userModel.js'
import bcrypt from "bcryptjs"

export const register = async(req,res) => {
    try{

        const hash = bcrypt.hashSync(req.body.password, 5) 

        const newUser = new User({
            ...req.body,
            password: hash
        });


        await newUser.save();
        
        res.status(201).send("User has been created")

    }catch(err){
        res.status(500).send(err.message)
    }
}

export const login = async(req,res) => {
    try{

        const user  = await User.findOne({username: req.body.username});

        if(!user) return res.status(404).send("User does not exist");

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isCorrect) return res.status(404).send("wrong password and username")





    }catch(err){
        res.status(500).send(err.message)
    }
 
}