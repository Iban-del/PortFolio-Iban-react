import type React from "react"
import GroupComponent from "./GroupComponent"
import type { Mesh } from "three"

interface particleInterface{
    geometry:Mesh,
    particleNumber:number,
    formula?:()=>any
}

const Particle:React.FC<particleInterface> = ({
    geometry,
    particleNumber,
    formula
}) =>{

    

    return (
        <GroupComponent>

        </GroupComponent>
    )

}

export default Particle