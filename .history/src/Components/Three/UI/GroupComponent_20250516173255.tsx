import { useRef } from "react"
import type { Props } from "../../../Core/GenericType"
import type { Group } from "three"


interface GroupInterface extends Props{
    props:Group
}

const GroupComponent:React.FC<GroupInterface>= ({
    childrens,
    ...props
}) =>{

    const groupRef = useRef<Group>(null);

    return (
        <group
            ref={groupRef}
            {...props}
        >
            {childrens}
        </group>
    )

}

export default GroupComponent