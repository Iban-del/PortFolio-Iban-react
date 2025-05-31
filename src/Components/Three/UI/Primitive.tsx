
import { useEffect, useMemo, useRef, type JSX } from "react";
import type {  DefaultGeometry } from "../Core/Type";
import MeshComponent, { type MeshComponentInterface } from "./MeshComponent";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { MeshBasicMaterial, MeshStandardMaterial } from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
type PrimitiveProps = JSX.IntrinsicElements['group'];

export interface BoxInterface extends MeshComponentInterface,DefaultGeometry{
    link:string
    primitiveArgs?:PrimitiveProps,
    colorObject?:string,
    useTexture?:boolean,
    scalePrimitive?:[number|number|number] | number
}

const Primitive: React.FC<BoxInterface>  = ({
    link,
    primitiveArgs,
    colorObject = "#fff",
    scalePrimitive = 1,
    useTexture = false,
    materialArgs,
    ...propsEvent
}) =>{


    const gltf = useLoader(GLTFLoader,link)
    const primitiveRef = useRef(null)
    const newInstance = useMemo(() => clone(gltf.scene), [gltf.scene]);

    useEffect(()=>{
        newInstance.traverse((child)=>{
            if((child as any).isMesh && !useTexture){
                (child as any).material = new MeshStandardMaterial({ color: colorObject,...materialArgs})
            }
        })
    },[colorObject,materialArgs,newInstance])

    return (
        <MeshComponent
            {...propsEvent}          
        >
            <primitive ref={primitiveRef} scale={scalePrimitive} object={newInstance} castShadow receiveShadow {...primitiveArgs}/>
        </MeshComponent>
    )

}

export default Primitive