"use client"
import { useEffect ,useRef } from "react";
import { InitDraw } from "@/app/draw";
export default function Canvas(){
    const canvasRef= useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(canvasRef.current){

            InitDraw(canvasRef.current);
        }
    },[canvasRef])





    return <div className="text-whit h-screen w-screen">
        <canvas className="border-2 border-white" ref={canvasRef} width={1000} height={1000} id="canvas"> </canvas>
    </div>
}