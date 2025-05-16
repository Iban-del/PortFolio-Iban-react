import type React from "react"
import type { DefaultGeometry } from "../Type"
import {  useThree, type Vector3 } from "@react-three/fiber";
import { Text } from '@react-three/drei';
import type { MeshComponentInterface } from "./MeshComponent";
import MeshComponent from "./MeshComponent";

interface TextInterface extends MeshComponentInterface, DefaultGeometry{
    text:string,
    textScale?:Vector3,
}

const TextComponent: React.FC<TextInterface> = ({
    text,
    textScale = [1,1,1],
    color = 'black',
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {


    const {size} = useThree()

    console.log(size)

    return (
        <MeshComponent
            {...propsEvent}
        >
            <Text scale={textScale}>
                {text}
                <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
            </Text>
        </MeshComponent>
    )

}

export default TextComponent