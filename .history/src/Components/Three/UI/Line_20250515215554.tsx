import type { Vector3 } from "@react-three/fiber"
import type React from "react"


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
        <mesh  onPointerOver={console.log}>
            
        </mesh>
    )

}

export default Line