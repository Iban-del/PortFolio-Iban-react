import type { Camera, Group, Mesh, Object3D, PerspectiveCamera } from "three"
import gsap from 'gsap'
import type { Coordinate, ThreeComponent } from "../Core/Type";

interface Annimationinterface{
    component:ThreeComponent,
    delta?:number,
    duration?:number,
    repeat?:number,
    ease?:string
    onFinish?:()=>void
}

export interface scrollAnnimationInterface {
    coordinate:Coordinate,
    component:Object3D|PerspectiveCamera,
    onFinish:()=>void
}


const defaultDuration = 1.5;

export const topDown = ({
    component,
    delta = 0.5,
    duration =defaultDuration,
    repeat = -1,
    ease = "power2.inOut",
    onFinish,
}:Annimationinterface) =>{
    gsap.to(component.position,{
        y:'+='+delta,
        duration:duration,
        repeat:repeat,
        yoyo:true,
        ease:ease,
        onComplete:()=>{
            onFinish && onFinish()
        },
    })
}

export const moveComponent = ({
    component,
    delta = 0.5,
    duration =defaultDuration,
    repeat = 0,
    ease = "power1.inOut",
    onFinish,
}:Annimationinterface) =>{
    gsap.to(component.position,{
        y:'+='+delta,
        duration:duration,
        repeat:repeat,
        yoyo:true,
        ease:ease,
        onComplete:()=>{
            onFinish && onFinish()
        },
    })
}

export const scrollAnnimation = ({
    coordinate,
    component,
    onFinish
}:scrollAnnimationInterface) => {
    gsap.to(component.position,{
        x:coordinate[0],
        y:coordinate[1],
        z:coordinate[2],
        duration:defaultDuration,
        repeat:0,
        yoyo: false,
        ease:"power1.inOut",
        onComplete:()=>{
            onFinish()
        },
    })
}