import type { Mesh } from "three"
import gsap from 'gsap'

interface Annimationinterface extends GSAP{
    mesh:Mesh,
    delta?:number,
    duration?:number,
    repeat?:number,
    ease?:string
    onFinish?:()=>void
}

export const topDown = ({
    mesh,
    delta = 0.5,
    duration =2,
    repeat = -1,
    onFinish = undefined,
    ...props
}:Annimationinterface) =>{
    gsap.to(mesh.position,{
        y:'+='+delta,
        duration:duration,
        repeat:repeat,
        yoyo:true,
        ease:"elastic.inOut",
        onComplete:()=>{
            delta = -delta;
            onFinish && onFinish()
        },
    })
}