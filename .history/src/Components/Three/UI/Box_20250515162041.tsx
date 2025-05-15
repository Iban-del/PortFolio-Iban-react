import { useFrame, type RootState } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import type { MeshEventHandlers } from "../Type";

type BoxGeometryArgs = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
];

export interface BoxInterface extends MeshEventHandlers{
    size?:BoxGeometryArgs,
    position?:Array<number>
    color?:string,
    onFrame?: (mesh:Mesh,state:RootState,delta:number) => void,
}

const Box: React.FC<BoxInterface>  = ({
    size = [1,1,1],
    color = 'black',
    onFrame,
    ...propsEvent
},
) =>{

    const refMesh = useRef<Mesh|null>(null);

    useFrame((state, delta) => {
        if(refMesh.current){
            onFrame && onFrame(refMesh.current,state,delta)
        }
    })

    return (
        <mesh
            position={[1,1,1]}
            {...propsEvent}
            ref={refMesh}            
        >
            <boxGeometry args={size}></boxGeometry>
            <meshBasicMaterial color={color}></meshBasicMaterial>
        </mesh>
    )

}

export default Box