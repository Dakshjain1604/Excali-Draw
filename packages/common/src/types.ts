import {z, ZodObject} from "zod";


export const CreateUserSchema= z.object({
    email:z.string().min(3).max(40),
    password:z.string(),
    name:z.string(),
    image:z.string().url().optional()
})




export const SigninSchema= z.object({
    email:z.string().min(3).max(40),
    password:z.string(),

})



export const createRoomSchema=z.object({
    name:z.string().min(3).max(40),
})

