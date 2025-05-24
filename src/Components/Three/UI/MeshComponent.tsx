import { useFrame, useThree, type RootState } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, type JSX } from "react"
import type { Mesh, MeshStandardMaterialParameters } from "three"
import { getScale } from "../Tools/GenericFunction";
import BackgroundHook from "../../../hooks/BackgroundHook";
import ScrollListener from "../ScrollListener";
import ApplicationHook from "../../../hooks/ApplicationHook";

type MeshType = JSX.IntrinsicElements['mesh'];

export interface MeshComponentInterface extends MeshType{
    onFrame?: (mesh:Mesh,state:RootState,delta:number) => void,
    beforeRender?:(mesh:Mesh) => void,
    onScrollDown?:(mesh:Mesh)=>void,
    onScrollUp?:(mesh:Mesh)=>void,
    stepScroll?:number,
    responsive?:boolean,
    materialArgs?:MeshStandardMaterialParameters
} 



const MeshComponent: React.FC<MeshComponentInterface> = ({
    onFrame,
    beforeRender,
    children,
    stepScroll = -1,
    responsive = false,
    ...meshProps
}) => {
    
    const { size } = useThree()
    const refMesh = useRef<Mesh>(null)
    const {scale} = BackgroundHook()


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

    const sc = useMemo(()=>{
        if(!responsive || !scale) return 1;
        const sizePx = size.width * size.height;
        const percentage = getScale(sizePx)
        scale.setState(percentage)
        return percentage
    },[size,scale])

    


    return <mesh 
        scale={[sc,sc,sc]}
        ref={refMesh}
        {...meshProps}
    >
        {children}
    </mesh>
}




export default MeshComponent