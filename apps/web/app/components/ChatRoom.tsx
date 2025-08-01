import axios from "axios"
import { BACKEND_URL } from "../config"
import { ChatRoomClient } from "./ChatRoomClient";


async function getChats(roomid:string){
    const response=await axios.get(`${BACKEND_URL}/chats/${roomid}`);  
    return response.data.messages
}

export async function ChatRoom({id}:{
    id:string
}){
    const messages=await getChats(id);
    return <ChatRoomClient id={id} messages={messages}/>
    
}