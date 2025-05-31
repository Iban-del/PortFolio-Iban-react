import type { Vector3 } from "@react-three/fiber"
import type React from "react"
import { useEffect, useRef } from "react"



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

    const lineRef = useRef<SVGLineElement>(null)

    useEffect(()=>{
        points.map((e)=>{
            
        })
    })

    return (
        <line ref={lineRef} color={color} >
            <lineBasicMaterial linewidth={width} attach="material"></lineBasicMaterial>
        </line>
    )

}

export default Line