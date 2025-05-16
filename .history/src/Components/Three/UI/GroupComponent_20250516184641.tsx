import { useFrame, type RootState } from "@react-three/fiber";
import { useRef, type JSX } from "react"
import type { Group, Mesh } from "three";

type GroupProps = JSX.IntrinsicElements['group'];

interface GroupInterface extends GroupProps{
    onFrame?: (group:Group,state:RootState,delta:number) => void,
}

const GroupComponent:React.FC<GroupInterface>= ({
    children,
    onFrame,
    ...props
}) =>{

    const groupRef = useRef<Group>(null);

    useFrame((state, delta) => {
        if(groupRef.current){
            groupRef && onFrame(groupRef.current,state,delta)
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