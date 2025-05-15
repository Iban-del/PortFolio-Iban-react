import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, RingGeometryArgs } from "../Type"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";


interface RingInterface extends MeshEventHandlers, DefaultGeometry{
    args?:RingGeometryArgs
}

const Ring: React.FC<RingInterface> = ({
    args = [],
    color = 'black',
    position = [0,0,0],
    onFrame,
    beforeRender,
    ...propsEvent
}) => {


    return (
        <mesh
            position={position}
            {...propsEvent}
            ref={refMesh}
        >
            
            <ringGeometry args={args} ></ringGeometry>
            <meshBasicMaterial color={color} ></meshBasicMaterial>
        </mesh>
    )

}

export default Ring