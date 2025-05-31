import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import type { DefaultGeometry, MeshEventHandlers } from "../Type";



export interface BoxInterface extends MeshEventHandlers,DefaultGeometry{

}

const Box: React.FC<BoxInterface>  = ({
    size = [1,1,1],
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

    useFrame(()=>{
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
            <boxGeometry args={size}></boxGeometry>
            <meshBasicMaterial color={color}></meshBasicMaterial>
        </mesh>
    )

}

export default Box