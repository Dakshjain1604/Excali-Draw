import { Hedvig_Letters_Sans } from "next/font/google";

export function InitDraw(canvas:HTMLCanvasElement  ){
    let startX=0;
    let startY=0;
    const ctx=canvas.getContext("2d");
    let clicked=false;
    ctx.strokeStyle="white";
    if(!ctx){return 

    }
    canvas.addEventListener("mousedown",(e)=>{
        clicked=true
        startX=e.clientX
        startY=e.clientY
    })


    canvas.addEventListener("mouseup",(e)=>{
        clicked=false;
        startX=e.clientX
        startY=e.clientY
    })

    canvas.addEventListener("mousemove",(e)=>{
        if(clicked){
            const width=e.clientX-startX;
            const height =e.clientY-startY;

            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.strokeRect(startX,startY,canvas.width,canvas.height);
            ctx.strokeRect(startX,startY,canvas.width,canvas.height);
        }
    })
    
}
