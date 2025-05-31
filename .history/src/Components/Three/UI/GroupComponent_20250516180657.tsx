import { useRef } from "react"
import type { Props } from "../../../Core/GenericType"
import type { Group } from "three";


interface GroupInterface extends Props{
    props?:Group
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