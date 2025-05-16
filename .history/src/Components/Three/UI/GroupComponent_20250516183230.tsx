import { useRef, type JSX } from "react"
import type { Group } from "three";

type GroupProps = JSX.IntrinsicElements['group'];

interface GroupInterface extends GroupProps{}

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