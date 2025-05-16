import { useRef } from "react"
import type { Props } from "../../../Core/GenericType"
import type { Group, Object3DNode } from "three/webgpu";


interface GroupInterface extends Props{
    props?:Object3DNode
}

const GroupComponent:React.FC<GroupInterface>= ({
    children,
    ...props
}) =>{

    const groupRef = useRef<Group>(null);

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