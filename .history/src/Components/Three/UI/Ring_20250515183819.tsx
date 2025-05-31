import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, TubeGeometryArgs } from "../Type"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";


interface TubeInterface extends MeshEventHandlers, DefaultGeometry{
    args?:TubeGeometryArgs
}

const Ring: React.FC<TubeInterface> = ({
    args,
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
            
            <tubeGeometry args={args} ></tubeGeometry>
            <meshBasicMaterial color={color} ></meshBasicMaterial>
        </mesh>
    )

}

export default Ring