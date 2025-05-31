import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, TubeGeometryArgs } from "../Type"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";


interface TubeInterface extends MeshEventHandlers, DefaultGeometry{
    args:TubeGeometryArgs
}

const Tube: React.FC<TubeInterface> = ({
    args,
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
            
            <tubeGeometry args={args} ></tubeGeometry>
            <meshStandardMaterial  color={color} metalness={0.9} roughness={0.5} ></meshStandardMaterial>
        </mesh>
    )

}

export default Tube