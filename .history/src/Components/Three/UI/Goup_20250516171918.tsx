import type { Props } from "../../../Core/GenericType"


interface GroupInterface extends Props{
    
}

const Group= ({
    children
}:GroupInterface) =>{

    return (
        <group>
            {children}
        </group>
    )

}

export default Group