import type React from "react"
import GroupComponent from "./GroupComponent"
import type { Mesh } from "three"

interface particleInterface{
    geometry:Mesh
}

const Particle:React.FC<particleInterface> = ({
    geometry
}) =>{

    return (
        <GroupComponent>

        </GroupComponent>
    )

}

export default Particle