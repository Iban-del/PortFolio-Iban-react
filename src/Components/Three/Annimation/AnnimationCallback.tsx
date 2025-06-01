import { ANNIMATION_D } from "../../../Core/GlobalConstant"
import type { Coordinate, ThreeComponent } from "../Core/Type"
import { scrollAnnimation } from "./GaspAnnimation"
import gsap from 'gsap'

export const MoveTo = async (
    c:Coordinate,
    component:ThreeComponent,
    onFinish?:()=>void
) => {
    scrollAnnimation({
        coordinate:c,
        component:component,
        onFinish:()=>{
            onFinish&&onFinish()
        }
    })
}

export const ChangeSize = async (
    component:ThreeComponent,
    scale:number,
    onFinish?:()=>void
) =>{
    gsap.to(component.scale,{
        x:scale,
        y:scale,
        z:scale,
        duration:ANNIMATION_D,
        onComplete:()=>{
            onFinish && onFinish()
        },
    })
}   

export const AnnimatePosition = async (
    component:ThreeComponent,
    delta:number,
    onFinish?:()=>void
) =>{
    gsap.to(component.position,{
        y:'+='+delta,
        repeat:-1,
        duration:ANNIMATION_D+2,
        yoyo:true,
        ease:'none',
        onRepeat:()=>{
            onFinish && onFinish()
        },
    })
}   

