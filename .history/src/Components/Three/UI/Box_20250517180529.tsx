
import type { BoxGeometryArgs, DefaultGeometry } from "../Type";
import MeshComponent, { type MeshComponentInterface } from "./MeshComponent";



export interface BoxInterface extends MeshComponentInterface,DefaultGeometry{
    boxArgs?:BoxGeometryArgs,
}

const Box: React.FC<BoxInterface>  = ({
    boxArgs = [1,1,1],
    materialArgs = {},
    color = '#fff',
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) =>{

    return (
        <MeshComponent
            {...propsEvent}          
        >
            <boxGeometry args={boxArgs}></boxGeometry>
            <meshStandardMaterial {...materialArgs} color={color} metalness={metalness}  ></meshStandardMaterial>
        </MeshComponent>
    )

}

export default Box