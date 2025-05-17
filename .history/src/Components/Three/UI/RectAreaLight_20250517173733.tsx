import type { DefaultGeometry, RectAreaLightArgs } from "../Type";
import MeshComponent, { type MeshComponentInterface } from "./MeshComponent";



export interface RectAreaLightInterface extends MeshComponentInterface,DefaultGeometry{
    rectAreaLightArgs?:RectAreaLightArgs
}

const RectAreaLight: React.FC<RectAreaLightInterface>  = ({
    rectAreaLightArgs = ["#fff",1,1],
    ...propsEvent
}) =>{

    return (
        <MeshComponent
            {...propsEvent}          
        >
            <rectAreaLight args={rectAreaLightArgs}></rectAreaLight>
        </MeshComponent>
    )

}

export default RectAreaLight