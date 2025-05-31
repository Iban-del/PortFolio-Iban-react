import type React from "react"
import GroupComponent from "./GroupComponent"
import type { Mesh } from "three"

interface particleInterface{
    geometry:Mesh,
    particleNumber:number,
    step?:number
}

const Particle:React.FC<particleInterface> = ({
    geometry,
    particleNumber
}) =>{

    

    return (
        <GroupComponent>

        </GroupComponent>
    )

}

export default Particle