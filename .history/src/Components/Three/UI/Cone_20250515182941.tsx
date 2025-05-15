import type React from "react"
import type { ConeGeometryArgs, DefaultGeometry, MeshEventHandlers } from "../Type"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";


interface ConeInterface extends MeshEventHandlers, DefaultGeometry{
    args:ConeGeometryArgs
}

const Cone: React.FC<ConeInterface> = ({
    args =[1,2],
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
            ref={refMesh}
        >
            
            <coneGeometry args={args} ></coneGeometry>
            <meshBasicMaterial color={color} ></meshBasicMaterial>
        </mesh>
    )

}

export default Cone