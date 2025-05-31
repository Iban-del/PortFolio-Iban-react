import type { BoxGeometryArgs, DefaultGeometry, RectAreaLightArgs } from "../Type";
import MeshComponent, { type MeshComponentInterface } from "./MeshComponent";



export interface RectAreaLightInterface extends MeshComponentInterface,DefaultGeometry{
    rectAreaLightArgs?:RectAreaLightArgs
}

const RectAreaLight: React.FC<RectAreaLightInterface>  = ({
    rectAreaLightArgs = [1,1,1],
    color = 'black',
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) =>{

    return (
        <MeshComponent
            {...propsEvent}          
        >
            <rectAreaLight args={rectAreaLightArgs}></rectAreaLight>
            <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </MeshComponent>
    )

}

export default RectAreaLight