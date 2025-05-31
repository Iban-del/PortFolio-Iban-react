import { useRef } from "react"
import type { Props } from "../../../Core/GenericType"
import type { Group } from "three"


interface GroupInterface extends Props{
    
}

const GroupComponent= ({
    children
}:GroupInterface) =>{

    const groupRef = useRef<Group>(null);


    return (
        <group
            ref={groupRef}
        >
            {children}
        </group>
    )

}

export default GroupComponent