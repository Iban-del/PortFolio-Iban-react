import { useFrame, type RootState, type ThreeEvent } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { BoxGeometry, Mesh, Object3D } from "three";

type BoxGeometryArgs = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
];

export type MeshEvent = {
    onClick?: (e: ThreeEvent<MouseEvent>) => void;
    onContextMenu?: (e: ThreeEvent<MouseEvent>) => void;
    onDoubleClick?: (e: ThreeEvent<MouseEvent>) => void;
    onWheel?: (e: ThreeEvent<WheelEvent>) => void;
    onPointerUp?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerDown?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerOver?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerEnter?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerLeave?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerMove?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerMissed?: (e: MouseEvent) => void;
    onUpdate?: (self: Object3D) => void;
}

export interface BoxInterface {
    size?:BoxGeometryArgs,
    color?:string,
    onFrame?: (mesh:Mesh,state:RootState,delta:number) => void,
    propsEvent:MeshEvent
}

const Box = ({
    size = [1,1,1],
    color = 'black',
    onFrame,
    ...propsEvent
}:BoxInterface,
) =>{

    const refMesh = useRef<Mesh|null>(null);

    useFrame((state, delta) => {
        if(refMesh.current){
            onFrame && onFrame(refMesh.current,state,delta)
        }
    })

    return (
        <mesh
            {...propsEvent}
            ref={refMesh}
            
        >
            <boxGeometry args={size}></boxGeometry>
            <meshBasicMaterial color={color}></meshBasicMaterial>
        </mesh>
    )

}

export default Box