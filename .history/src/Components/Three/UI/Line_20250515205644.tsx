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
        <line ref={ref} geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={10} linecap={'round'} linejoin={'round'} />
        </line>

}

export default Line