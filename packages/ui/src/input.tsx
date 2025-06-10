import { ForwardedRef } from "react"

interface InputProps{
    type:string,
    placeholder:string,
    ref?:ForwardedRef<HTMLInputElement>
}

export function  Input({type, placeholder,ref}:InputProps){
    return (
        <div className="w-full">
            <input  type={type} placeholder={placeholder} ref={ref} className="border-black text-purple">
            </input>
        </div>
    )
}