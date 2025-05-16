import type { BoxGeometryArgs, DefaultGeometry, MeshEventHandlers } from "../Type";



export interface BoxInterface extends MeshEventHandlers,DefaultGeometry{
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
        <mesh
            position={position}
            {...propsEvent}          
        >
            <boxGeometry args={args}></boxGeometry>
            <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Box