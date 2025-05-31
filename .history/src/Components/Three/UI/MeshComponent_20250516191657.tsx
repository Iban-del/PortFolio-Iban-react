import type { RootState } from "@react-three/fiber";
import React, { useEffect, useRef, useState, type JSX } from "react"
import type { Mesh } from "three"

type MeshType = JSX.IntrinsicElements['mesh'];

interface MeshComponentInterface extends MeshType{
    onFrame?: (mesh:Mesh,state:RootState,delta:number) => void,
    beforeRender?:(mesh:Mesh) => void
} 

const MeshComponent: React.FC<MeshComponentInterface> = ({
    onFrame,
    beforeRender
}) => {
    
    const [scale,setScale] = useState<number>(1)
    const refMesh = useRef<Mesh>(null)

    useEffect(()=>{

    })


    return <mesh 
    
    >

    </mesh>

}

export default MeshComponent