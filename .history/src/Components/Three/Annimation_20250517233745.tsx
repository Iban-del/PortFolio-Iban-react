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

interface CameraInterface extends Annimationinterface{
    deltaCamera:number
}

export const topDown = ({
    component,
    delta = 0.5,
    duration =2,
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
    deltaCamera,
    component,
    delta = 0.5,
    duration =2,
    repeat = -1,
    ease = "power2.inOut",
    onFinish = undefined,
}:CameraInterface) =>{
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