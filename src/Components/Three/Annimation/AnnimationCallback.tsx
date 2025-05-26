import type { Coordinate, ThreeComponent } from "../Core/Type"
import { scrollAnnimation } from "./GaspAnnimation"

export const MoveTo = (
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

