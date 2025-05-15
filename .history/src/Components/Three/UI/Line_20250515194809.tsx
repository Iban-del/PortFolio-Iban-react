import type { Vector3 } from "@react-three/fiber"
import type React from "react"



interface LineInterface{
    points:Vector3[],
    color?:string,
    width?:number
}

const Line: React.FC<LineInterface> = ({
    color = "black"
}) => {


    return (
        <line color={color} >

        </line>
    )

}

export default Line