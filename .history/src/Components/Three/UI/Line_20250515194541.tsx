import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, RingGeometryArgs } from "../Type"


interface RingInterface extends MeshEventHandlers, DefaultGeometry{
    args?:RingGeometryArgs
}

const Ring: React.FC<RingInterface> = ({
    args = [],
    color = 'black',
    position = [0,0,0],
    onFrame,
    beforeRender
}) => {


    return (
        <line>

        </line>
    )

}

export default Ring