import { useEffect, useRef, useState, type JSX } from "react"
import type { Mesh } from "three"

type MeshType = JSX.IntrinsicElements['mesh'];

interface MeshComponentInterface extends MeshType{

} 

const MeshComponent = ({

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