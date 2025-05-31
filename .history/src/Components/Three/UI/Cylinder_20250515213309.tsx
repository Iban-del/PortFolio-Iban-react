import type React from "react"
import type { CylinderGeometryArgs, DefaultGeometry, MeshEventHandlers } from "../Type"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";


interface CylinderInterface extends MeshEventHandlers, DefaultGeometry{
    args?:CylinderGeometryArgs
}

const Cylinder: React.FC<CylinderInterface> = ({
    args =[1,1,1,64],
    color = 'black',
    position = [0,0,0],
    onFrame,
    beforeRender,
    metalness = 0.9,
    roughness = 0.5,
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
            ref={refMesh}
        >
            
            <cylinderGeometry args={args} ></cylinderGeometry>
            <meshStandardMaterial color={color} ></meshStandardMaterial>
        </mesh>
    )

}

export default Cylinder