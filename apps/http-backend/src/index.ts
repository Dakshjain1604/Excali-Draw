import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { authmiddleware } from "./middleware";
import {
  CreateUserSchema,
  SigninSchema,
  createRoomSchema,
} from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hi there");
});

app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);
  if (!parsedData.success) {
    console.log(parsedData.error);
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  try {
    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);
    const user = await prismaClient.user.create({
      data: {
        email: parsedData.data?.email,
        password: hashedPassword,
        name: parsedData.data.name,
      },
    });
    res.json({
      userId: user.id,
    });
  } catch (e) {
    res.status(411).json({
      message: "User already exists with this username",
    });
  }
});

app.post("/signin", async (req, res) => {
  const parsedData = SigninSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  try {
    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);
    console.log(
      parsedData.data.email,
      parsedData.data.password,
      hashedPassword
    );

    const user = await prismaClient.user.findFirst({
      where: {
        email: parsedData.data.email,
      },
    });
    const userPassword=user?.password;
    
    const confirmUser=bcrypt.compare(hashedPassword,JSON.stringify(userPassword))
    if (!confirmUser) {
      res.status(403).json({
        message: "Not authorized",
      });
    }
    const token = jwt.sign(
      {
        userId: user?.id,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } catch (e) {
    res.status(404).json({
      error: e,
    });
  }
});


app.post('/room', authmiddleware , async (req,res)=>{
  const parsedData=createRoomSchema.safeParse(req.body);

  if(!parsedData.success){
    res.json({
      message:"Incorrect Inputs"
    })
    return;
  }
  //@ts-ignore
  const userId=req.userId;
  const findSlug=await prismaClient.room.findUnique({
    where:{
      slug:parsedData.data.name
    }
  })
  try{
    console.log(userId,parsedData.data.name)
  const room=await prismaClient.room.create({
    data:{
      slug:parsedData.data?.name,
      adminId:userId
    }
  })
  res.json({
    roomId:room.id
  })
  }
  catch(e){
    res.status(411).json({
      message:"room already exists"
    })
  }
})

app.listen(3001);
