"use client"
import axios from "axios"
import { HTTP_BACKEND } from "../config";
import { Scope_One } from "next/font/google";
import { Socket } from "dgram";

type Shape = {
    type: "rect";
    x: number;
    y: number;
    width: number;
    height: number;
} | {
    type: "circle";
    centerX: number;
    centerY: number;
    radius: number;
}

export async function InitDraw(canvas: HTMLCanvasElement, roomId:string, socket:WebSocket) {
    const ctx = canvas.getContext("2d");
    let existingShapes: Shape[] = await getExistingShapes(roomId);
    if (!ctx) { 
        return;
    }
    
    socket.onmessage=(event)=>{
            const message= JSON.parse(event.data);
            if(message.type=="chat"){
                const parsedShape=JSON.parse(message.message)
                existingShapes.push(parsedShape);
                clearCanvas(existingShapes, canvas, ctx);
            }
    }
    ctx.fillStyle = "rgba(0,0,0,1)";
    let startX = 0;
    let startY = 0;
    let clicked = false;
    ctx.strokeStyle = "white";

    canvas.addEventListener("mousedown", (e) => {
        clicked = true;
        const rect = canvas.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseup", (e) => {
        if (!clicked) return;
        
        clicked = false;
        const rect = canvas.getBoundingClientRect();
        const height=e.clientY-startY;
        const width=e.clientX-startX;
        const shape:Shape={
            type:"rect",
            x:startX,
            y:startY,
            height,
            width
        }
        existingShapes.push(shape);
        socket.send(JSON.stringify({
            type:"chat",
            message:JSON.stringify({
                shape
            }),
            roomId
        }))
        clearCanvas(existingShapes, canvas, ctx);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (clicked) {
            const rect = canvas.getBoundingClientRect();
            const currentX = e.clientX - rect.left;
            const currentY = e.clientY - rect.top;
            const width = currentX - startX;
            const height = currentY - startY;
            
            clearCanvas(existingShapes, canvas, ctx);
            ctx.strokeStyle = "rgba(255,255,255,1)";
            ctx.strokeRect(startX, startY, width, height);
        }
    });
}

function clearCanvas(existingShapes: Shape[], canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    existingShapes.forEach((shape) => {
        if (shape.type === "rect") {
            ctx.strokeStyle = "rgba(255,255,255,1)";
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        }
    });
}



async function  getExistingShapes(roomId:string){
    const res=await axios.get(`${HTTP_BACKEND}/chat/${roomId}`);

    const messages=res.data.messages;

    const shapes=messages.map((x:{message:string})=>{
        const messageData=JSON.parse(x.message)
        return messageData;
    })
    return shapes;

}