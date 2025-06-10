"use client"
import { MouseEventHandler, ReactNode, ForwardedRef  } from "react";



export function AuthPage({ isSignin }: {
    isSignin: boolean
}) {

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className=" p-2 m-2 bg-white rounded flex flex-col justify-center gap-4 text-black w-60">
            <div ><Input type="text-black w-full " placeholder="Email" /></div> 
            <div ><Input type="password" placeholder="password" /></div>
            <div className=" bg-black text-white rounded-md w-full">
                <ButtonAuth label={isSignin?"Sign In" :"Signup"} onClick={()=>{
                }}/>
            </div>
        </div>
    </div>
}





interface InputProps{
    type:string,
    placeholder:string,
    ref?:ForwardedRef<HTMLInputElement>
}

export function  Input({type, placeholder,ref}:InputProps){
    return (
        <div className="w-full">
            <input  type={type} placeholder={placeholder} ref={ref} className="border-black w-full px-3 py-1">
            </input>
        </div>
    )
}






interface ButtonProps {
  label:string,
  onClick:MouseEventHandler
}

export function ButtonAuth ({ label, onClick }: ButtonProps) {
  return (
    <button
      className="text-white w-full px-4 py-2 rounded-md "
    onClick={onClick}
    >
      {label}
    </button>
  );
};
