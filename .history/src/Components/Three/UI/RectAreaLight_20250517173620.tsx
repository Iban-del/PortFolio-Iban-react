import type { DefaultGeometry, RectAreaLightArgs } from "../Type";
import MeshComponent, { type MeshComponentInterface } from "./MeshComponent";



export interface RectAreaLightInterface extends MeshComponentInterface,DefaultGeometry{
    rectAreaLightArgs?:RectAreaLightArgs
}

const RectAreaLight: React.FC<RectAreaLightInterface>  = ({
    rectAreaLightArgs = [1,1,1],
    color = 'black',
    ...propsEvent
}) =>{

    return (
        <MeshComponent
            {...propsEvent}          
        >
            <rectAreaLight color={color}  args={rectAreaLightArgs}></rectAreaLight>
        </MeshComponent>
    )

}

export default RectAreaLight