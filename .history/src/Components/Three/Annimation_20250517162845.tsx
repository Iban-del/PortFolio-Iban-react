import type { Mesh } from "three"
import gsap from 'gsap'

interface Annimationinterface {
    mesh:Mesh,
    delta?:number,
    duration?:number,
    repeat?:number,
    onComplete:()=>void
}

const topDown = ({
    mesh,
    delta = 0.5,
    duration =2,
    repeat = -1,
    onComplete
}:Annimationinterface) =>{
    gsap.to(mesh.position,{
        y:'+='+delta,
        duration:duration,
        repeat:repeat
    })
}