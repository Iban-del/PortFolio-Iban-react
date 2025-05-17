import type React from "react"
import GroupComponent from "./GroupComponent"
import type { Mesh } from "three"
import { useEffect, useMemo, useState } from "react"
import Box from "./Box"

interface particleInterface{
    
}

const Particle:React.FC<particleInterface> = ({
    
}) =>{


    

    return (
        <GroupComponent>
            <Box/>
        </GroupComponent>
    )

}

export default Particle