import { useFrame, useThree, type RootState } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState, type JSX } from "react"
import type { Mesh } from "three"

type MeshType = JSX.IntrinsicElements['mesh'];

interface MeshComponentInterface extends MeshType{
    onFrame?: (mesh:Mesh,state:RootState,delta:number) => void,
    beforeRender?:(mesh:Mesh) => void
} 

const defaultSize = 1920*1080;

const MeshComponent: React.FC<MeshComponentInterface> = ({
    onFrame,
    beforeRender,
    ...meshProps
}) => {
    
    const { size } = useThree()
    const refMesh = useRef<Mesh>(null)

    useFrame((state,delta)=>{
        if(refMesh.current){
            onFrame && onFrame(refMesh.current,state,delta)
        }
    })

    useEffect(()=>{
        if(refMesh.current){
            beforeRender && beforeRender(refMesh.current)
        }
    })

    const scale = useMemo(()=>{
        const sizePx = size.width * size.height;
        return getScale(sizePx)
    },[size])


    return <mesh 
        scale={[scale,scale,scale]}
        ref={refMesh}
        {...meshProps}
    >

    </mesh>
}



const getScale = (size:number) =>{
    return (size * 100 / defaultSize)/100;
}

export default MeshComponent