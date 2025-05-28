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

