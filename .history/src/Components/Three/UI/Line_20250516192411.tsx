import type React from "react"
import { useRef } from "react"
import {  Vector2, Vector3 } from "three"



interface LineInterface{
    points:Vector3[] | Vector2[],
    color?:string,
    width?:number
}

const Line: React.FC<LineInterface> = ({
    color = "black",
    width = 1
}) => {

    const lineRef = useRef<SVGLineElement>(null)
    // const lineGeometry = new BufferGeometry().setFromPoints(points)

    return (
        <line ref={lineRef} color={color} >
            <lineBasicMaterial linewidth={width} attach="material"></lineBasicMaterial>
        </line>
    )

}

export default Line