
import { useEffect, type JSX } from "react";
import type {  DefaultGeometry } from "../Type";
import MeshComponent, { type MeshComponentInterface } from "./MeshComponent";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { MeshBasicMaterial, MeshStandardMaterial } from "three";
type PrimitiveProps = JSX.IntrinsicElements['group'];

export interface BoxInterface extends MeshComponentInterface,DefaultGeometry{
    link:string
    primitiveArgs?:PrimitiveProps,
    colorObject?:string,
    scalePrimitive?:[number|number|number] | number
}

const Primitive: React.FC<BoxInterface>  = ({
    link,
    primitiveArgs,
    colorObject = "#fff",
    scalePrimitive = 1,
    materialArgs,
    ...propsEvent
}) =>{


    const gltf = useLoader(GLTFLoader,link)
    
    useEffect(()=>{
        gltf.scene.traverse((child)=>{
            if((child as any).isMesh){
                (child as any).material = new MeshStandardMaterial({ color: colorObject,...materialArgs})
            }
        })
    })

    return (
        <MeshComponent
            {...propsEvent}          
        >
            <primitive scale={scalePrimitive} object={gltf.scene} castShadow receiveShadow {...primitiveArgs}/>
        </MeshComponent>
    )

}

export default Primitive