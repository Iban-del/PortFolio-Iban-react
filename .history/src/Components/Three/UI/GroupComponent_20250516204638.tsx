import { useFrame, type RootState } from "@react-three/fiber";
import { useRef, type JSX } from "react"
import type { Group } from "three";

type GroupProps = JSX.IntrinsicElements['group'];

interface GroupInterface extends GroupProps{
    onFrame?: (group:Group,state:RootState,delta:number) => void,
    responsive?:boolean
}

const GroupComponent:React.FC<GroupInterface>= ({
    children,
    onFrame,
    responsive = true,
    ...props
}) =>{

    const groupRef = useRef<Group>(null);

    useFrame((state, delta) => {
        if(groupRef.current){
            onFrame && onFrame(groupRef.current,state,delta)
        }
    })

    return (
        <group
            ref={groupRef}
            {...props}
        >
            {children}
        </group>
    )

}

export default GroupComponent