"use client"
import { WS_URL } from "../config";
import { useEffect, useState } from "react";

import { Canvas } from "./Canvas";

export function RoomCanvas({roomId}:{
    roomId:string}){
  
    const [socket,setSocket]=useState<WebSocket | null>(null);

    useEffect(()=>{
        const ws= new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkYjBlNDc0OC1hZTAwLTQ1OTQtOTlmMy1jNmUwZWMzZjVjMWMiLCJpYXQiOjE3NDk3NDg0Mzd9.Xht2GeaZxzjSabeAcbSshbAaYD5FfP_hTqv6sw_hNO0`);
        ws.onopen=()=>{
            setSocket(ws);
            ws.send(JSON.stringify({
                type:"join_room",
                roomId
            }))
;        }
    },[])
   
    if(!socket){
        return <div className="text-blue-500 text-shadow-blue-600 shadow-4xl">
            connecting to server .......
        </div>
    }
    return <div className="text-whit h-screen w-screen">
        {/* this is the canvas component that we created  */}
        <Canvas roomId={roomId} socket={socket}/>
    </div>
}