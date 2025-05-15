import type React from "react"
import type { DefaultGeometry, MeshEventHandlers } from "../Type"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";


interface SphereInterface extends MeshEventHandlers, DefaultGeometry{

}

const Sphere: React.FC<SphereInterface> = ({
    size = [1,1,1],
    color = 'black',
    position = [0,0,0],
    onFrame,
    beforeRender,
    ...propsEvent
}) => {

    const refMesh = useRef<Mesh|null>(null);
    
    useFrame((state, delta) => {
        if(refMesh.current){
            onFrame && onFrame(refMesh.current,state,delta)
        }
    })

    useEffect(()=>{
        if(refMesh.current){
            beforeRender && beforeRender(refMesh.current)
        }
    })

    return (
        <mesh
            position={position}
            {...propsEvent}
        >

            <sphereGeometry></sphereGeometry>
            <meshBasicMaterial></meshBasicMaterial>
        </mesh>
    )

}

export default Sphere