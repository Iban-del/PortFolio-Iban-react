import type React from "react"
import GroupComponent from "./GroupComponent"
import type { Mesh } from "three"
import { useState } from "react"

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

    const geometries = useState<Array<Mesh>>(null)

    return (
        <GroupComponent>

        </GroupComponent>
    )

}

export default Particle