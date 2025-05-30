import express from "express";
import zod from "zod";
import bcrypt from "bcrypt";
const app=express();
app.use(express.json());
import {CreateUserSchema,SigninSchema} from "@repo/common/types"

app.post("/signup",async (req,res)=>{
    const user=CreateUserSchema.safeParse(req.body)
    if(!user){
        res.status(411).json({
            message:"incorrect creds"
        })
    }
    const foundUser=await User.findOne({
        username:user.data?.username
    })
    if(foundUser){
        res.status(400).json({
            message:"user already exists"
        })
    }
    const hashedPassword=bcrypt.hash(user.data?.password,10)
    await User.create({
        username:user.data?.username,
        password:user.data?.password,
        firstname:user.data?.firstname,
        lastname:user.data?.lastname
    })
    res.status(200).json({
        message:"user sucessfully created "
    })
})

app.post("/login",(req,res)=>{
   const user=SigninSchema.safeParse(req.body);
})

app.listen(4000);