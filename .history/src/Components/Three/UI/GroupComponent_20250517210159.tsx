import { useFrame, useThree, type RootState } from "@react-three/fiber";
import { useMemo, useRef, type JSX } from "react"
import type { Group } from "three";

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
    const { size } = useThree()

    useFrame((state, delta) => {
        if(groupRef.current){
            onFrame && onFrame(groupRef.current,state,delta)
        }
    })

    const scale = useMemo(()=>{
            if(!responsive) return 1;
    
            const sizePx = size.width * size.height;
            return getScale(sizePx)
            
    },[size])

    return (
        <group
            ref={groupRef}
            {...props}
        >
            {children}
        </group>
    )

}

const getScale = (size:number) =>{
    const percentage =  (size * 100 / defaultSize)/100;
    return percentage < 0.5 ? 0.5 : percentage
}

export default GroupComponent