import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";
import type { BoxGeometryArgs, DefaultGeometry, MeshEventHandlers } from "../Type";



export interface BoxInterface extends MeshEventHandlers,DefaultGeometry{
    args?:BoxGeometryArgs
}

const Box: React.FC<BoxInterface>  = ({
    args = [1,1,1],
    color = 'black',
    position = [0,0,0],
    onFrame,
    beforeRender,
    ...propsEvent
},
) =>{

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
            <boxGeometry args={args}></boxGeometry>
            <meshStandardMaterial  color={color} metalness={1} roughness={0} ></meshStandardMaterial>
        </mesh>
    )

}

export default Box