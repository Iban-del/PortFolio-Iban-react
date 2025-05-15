import { useEffect, useRef } from "react";

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
    color?:string
}

const Box = ({
    size = [1,1,1],
    color = 'black'
}:BoxInterface) =>{

    const refMesh = useRef(null);

    useEffect(()=>{
        if(refMesh.current){

        }
    })

    return (
        <mesh
            ref={refMesh.current}
        >
            <boxGeometry args={size}></boxGeometry>
            <meshBasicMaterial color={color}></meshBasicMaterial>
        </mesh>
    )

}

export default Box