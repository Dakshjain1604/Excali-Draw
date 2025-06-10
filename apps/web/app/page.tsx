"use client"
import {use, useState} from "react"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Home() {
  const [roomId,setRoomId]=useState("")
  const router=useRouter();

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      width:"100vw"

    }}>
      <input value={roomId} onChange={(e) =>{
        setRoomId(e.target.value);
      }}
        type="text" placeholder="Room id" 
        style={{
          padding:"10px"
        }}>
      </input>


      <button onClick={()=>{
        router.push(`/room/${roomId}`);
      }}style={{
        padding:"10px"
      }}> Join Room
        </button>
    
    </div>
  );
}
