import type React from "react"
import GroupComponent from "./GroupComponent"
import type { Mesh } from "three"
import { useEffect, useMemo, useState } from "react"

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

    const geometries = useMemo(()=>{
        const g:Array<Mesh> = [];
        for(let i = 0; i < particleNumber;i++){
            
        }

        return g
    },[])

    

    return (
        <GroupComponent>

        </GroupComponent>
    )

}

export default Particle