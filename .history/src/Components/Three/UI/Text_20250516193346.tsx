import type React from "react"
import type { DefaultGeometry, MeshEventHandlers } from "../Type"
import {  useThree, type Vector3 } from "@react-three/fiber";
import { Text } from '@react-three/drei';

interface TextInterface extends MeshEventHandlers, DefaultGeometry{
    text:string,
    scale?:Vector3,
}

const TextComponent: React.FC<TextInterface> = ({
    text,
    scale = [1,1,1],
    color = 'black',
    position = [0,0,0],
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {


    const {size} = useThree()

    console.log(size)

    return (
        <mesh
            position={position}
            {...propsEvent}
        >
            <Text scale={scale}>
                {text}
                <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
            </Text>
        </mesh>
    )

}

export default TextComponent