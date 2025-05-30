import {z, ZodObject} from "zod";


export const CreateUserSchema= z.object({
    username:z.string().min(3).max(40),
    password:z.string(),
    name:z.string()
})




export const SigninSchema= z.object({
    username:z.string().min(3).max(40),
    password:z.string(),

})



export const createRoomSchema=z.object({
    name:z.string().min(3).max(40),
})

