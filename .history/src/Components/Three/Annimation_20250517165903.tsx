import type { Mesh } from "three"
import gsap from 'gsap'

interface Annimationinterface {
    mesh:Mesh,
    delta?:number,
    duration?:number,
    repeat?:number,
    onComplete?:()=>void
}

export const topDown = ({
    mesh,
    delta = 0.5,
    duration =2,
    repeat = -1,
    onComplete = undefined
}:Annimationinterface) =>{
    let d = delta;
    gsap.to(mesh.position,{
        y:'+='+delta,
        duration:duration,
        repeat:repeat,
        ease:"power2.inOut",
        yoyo:true,
        onComplete:()=>{
            d = -d;
            onComplete && onComplete()
        }
    })
}