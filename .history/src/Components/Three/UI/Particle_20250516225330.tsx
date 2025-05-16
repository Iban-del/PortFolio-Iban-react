import type React from "react"
import GroupComponent from "./GroupComponent"
import type { Mesh } from "three"
import { useEffect, useState } from "react"

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

    const [geometries,setGeometries] = useState<Array<Mesh>|null>(null)

    useEffect(()=>{
        
    })

    return (
        <GroupComponent>

        </GroupComponent>
    )

}

export default Particle