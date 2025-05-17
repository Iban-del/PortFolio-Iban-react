import { useFrame, useThree, type RootState } from "@react-three/fiber";
import { useEffect, useMemo, useRef, type JSX } from "react"
import type { Group } from "three";
import { getScale } from "../Tools/GenericFunction";

type GroupProps = JSX.IntrinsicElements['group'];

interface GroupInterface extends GroupProps{
    onFrame?: (group:Group,state:RootState,delta:number) => void,
    beforeRender?:(group:Group) => void,
    responsive?:boolean,
}

const GroupComponent:React.FC<GroupInterface>= ({
    children,
    onFrame,
    beforeRender,
    responsive = false,
    ...props
}) =>{

    const groupRef = useRef<Group>(null);
    const { size } = useThree()

    useFrame((state, delta) => {
        if(groupRef.current){
            onFrame && onFrame(groupRef.current,state,delta)
        }
    })

    useEffect(()=>{
        if(groupRef.current){
            beforeRender && beforeRender(groupRef.current)
        }
    })

    const scale = useMemo(()=>{
            if(!responsive) return 1;
            const sizePx = size.width * size.height;
            return getScale(sizePx)
            
    },[size])

    return (
        <group
            scale={[scale,scale,scale]}
            ref={groupRef}
            {...props}
        >
            {children}
        </group>
    )
}



export default GroupComponent