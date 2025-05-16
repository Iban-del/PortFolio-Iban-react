import { useRef } from "react"
import type { Props } from "../../../Core/GenericType"
import type { Group } from "three"


interface GroupInterface extends Props{
    
}

const Group= ({
    children
}:GroupInterface) =>{

    const groupRef = useRef<Group>(null)


    return (
        <group>
            {children}
        </group>
    )

}

export default Group