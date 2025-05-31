import type { Camera, Group, Mesh } from "three"
import gsap from 'gsap'

interface Annimationinterface{
    component:Mesh|Group|Camera,
    delta?:number,
    duration?:number,
    repeat?:number,
    ease?:string
    onFinish?:()=>void
}


const defaultDuration = 1;

export const topDown = ({
    component,
    delta = 0.5,
    duration =defaultDuration,
    repeat = -1,
    ease = "power2.inOut",
    onFinish = undefined,
}:Annimationinterface) =>{
    gsap.to(component.position,{
        y:'+='+delta,
        duration:duration,
        repeat:repeat,
        yoyo:true,
        ease:ease,
        onComplete:()=>{
            delta = -delta;
            onFinish && onFinish()
        },
    })
}

export const camera = ({
    component,
    delta = 0.5,
    duration =defaultDuration,
    repeat = 1,
    ease = "power2.inOut",
    onFinish = undefined,
}:Annimationinterface) =>{
    gsap.to(component.position,{
        y:'='+delta,
        duration:duration,
        repeat:repeat,
        yoyo:true,
        ease:ease,
        onComplete:()=>{
            onFinish && onFinish()
        },
    })
}