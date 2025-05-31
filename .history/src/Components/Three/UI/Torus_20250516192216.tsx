import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, TorusGeometryArgs } from "../Type"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";


interface TorusInterface extends MeshEventHandlers, DefaultGeometry{
    args?:TorusGeometryArgs
}

const Torus: React.FC<TorusInterface> = ({
    args = [],
    color = 'black',
    position = [0,0,0],
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {




    return (
        <mesh
            position={position}
            {...propsEvent}
        >
            
            <torusGeometry args={args} ></torusGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Torus