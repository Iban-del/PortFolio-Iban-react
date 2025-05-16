import type { BoxGeometryArgs, DefaultGeometry } from "../Type";
import MeshComponent, { type MeshComponentInterface } from "./MeshComponent";



export interface BoxInterface extends MeshComponentInterface,DefaultGeometry{
    boxArgs?:BoxGeometryArgs
}

const Box: React.FC<BoxInterface>  = ({
    boxArgs = [1,1,1],
    color = 'black',
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) =>{

    return (
        <MeshComponent
            {...propsEvent}          
        >
            <boxGeometry args={boxArgs}></boxGeometry>
            <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </MeshComponent>
    )

}

export default Box