import type { Vector3 } from "@react-three/fiber"
import type React from "react"
import { MeshLineGeometry, MeshLineMaterial, raycast } from 'meshline'

interface LineInterface{
    points:Vector3[],
    color?:string,
    width?:number
}

const Line: React.FC<LineInterface> = ({
    points,
    color = "black",
    width = 1
}) => {


    return (
        <mesh raycast={raycast} onPointerOver={console.log}>
            <meshLineGeometry points={[0, 0, 0, 1, 0, 0]} />
            <meshLineMaterial lineWidth={1} color="hotpink" />
        </mesh>
    )

}

export default Line