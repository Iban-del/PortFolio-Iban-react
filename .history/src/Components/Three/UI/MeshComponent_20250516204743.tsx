import { useFrame, useThree, type RootState } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, type JSX } from "react"
import type { Mesh } from "three"

type MeshType = JSX.IntrinsicElements['mesh'];

export interface MeshComponentInterface extends MeshType{
    onFrame?: (mesh:Mesh,state:RootState,delta:number) => void,
    beforeRender?:(mesh:Mesh) => void,
    responsive?:boolean
} 

const defaultSize = 1920*1080;

const MeshComponent: React.FC<MeshComponentInterface> = ({
    onFrame,
    beforeRender,
    children,
    responsive = true,
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
        {children}
    </mesh>
}



const getScale = (size:number) =>{
    const percentage =  (size * 100 / defaultSize)/100;
    return percentage < 0.5 ? 0.5 : percentage
}

export default MeshComponent