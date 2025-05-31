import type { DefaultGeometry, RectAreaLightArgs } from "../Core/Type";
import MeshComponent, { type MeshComponentInterface } from "./MeshComponent";



export interface RectAreaLightInterface extends MeshComponentInterface,DefaultGeometry{
    rectAreaLightArgs?:RectAreaLightArgs
}

const RectAreaLight: React.FC<RectAreaLightInterface>  = ({
    rectAreaLightArgs = ["#fff",1,1,1],
    ...propsEvent
}) =>{

    return (
        <MeshComponent
            {...propsEvent}          
        >
            <rectAreaLight rotation={[-Math.PI / 2, 0, 0]} args={rectAreaLightArgs}></rectAreaLight>
        </MeshComponent>
    )

}

export default RectAreaLight