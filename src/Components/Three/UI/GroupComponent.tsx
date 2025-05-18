import { useFrame, useThree, type RootState } from "@react-three/fiber";
import { useEffect, useMemo, useRef, type JSX } from "react"
import type { Group } from "three";
import { getScale } from "../Tools/GenericFunction";
import BackgroundHook from "../../../hooks/BackgroundHook";

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
    const {scale} = BackgroundHook()

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

    const sc = useMemo(()=>{
        if(!responsive || !scale) return 1;
        const sizePx = size.width * size.height;
        const percentage = getScale(sizePx)
        scale.setState(percentage)
        return percentage
    },[size,scale])

    return (
        <group
            scale={[sc,sc,sc]}
            ref={groupRef}
            {...props}
        >
            {children}
        </group>
    )
}



export default GroupComponent