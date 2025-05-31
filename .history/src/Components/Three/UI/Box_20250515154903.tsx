import { useFrame, type RootState } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { BoxGeometry, Mesh } from "three";

type BoxGeometryArgs = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
];

export interface BoxInterface {
    size?:BoxGeometryArgs,
    color?:string,
    onFrame?: (mesh:Mesh,state:RootState,delta:number) => void,
}

const Box = ({
    size = [1,1,1],
    color = 'black',
    onFrame,
}:BoxInterface,
props?:any) =>{

    const refMesh = useRef<Mesh|null>(null);

    useFrame((state, delta) => {
        if(refMesh.current){
            onFrame && onFrame(refMesh.current,state,delta)
        }
    })

    return (
        <mesh
            {...props}
            ref={refMesh}
            
        >
            <boxGeometry args={size}></boxGeometry>
            <meshBasicMaterial color={color}></meshBasicMaterial>
        </mesh>
    )

}

export default Box