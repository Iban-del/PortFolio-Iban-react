import type { BoxGeometryArgs, DefaultGeometry, MeshEventHandlers } from "../Type";
import MeshComponent, { type MeshComponentInterface } from "./MeshComponent";



export interface BoxInterface extends MeshComponentInterface,DefaultGeometry{
    args?:BoxGeometryArgs
}

const Box: React.FC<BoxInterface>  = ({
    args = [1,1,1],
    color = 'black',
    position = [0,0,0],
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
},
) =>{

    return (
        <MeshComponent
            position={position}
            {...propsEvent}          
        >
            <boxGeometry args={args}></boxGeometry>
            <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </MeshComponent>
    )

}

export default Box