"use client"

import { useEffect,useRef } from "react";
import { InitDraw } from "../draw";


export function Canvas({roomId,socket}:{
    socket:WebSocket,
    roomId:string
}){
    const canvasRef= useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
        if(canvasRef.current){

            InitDraw(canvasRef.current, roomId,socket);
        }
    },[canvasRef])
    return <div className="text-whit h-screen w-screen">
        {/* this is the canvas html element not our component  */}
        <canvas className="border-2 border-white" ref={canvasRef} width={2000} height={1000} id="canvas"> </canvas>
    </div>
}