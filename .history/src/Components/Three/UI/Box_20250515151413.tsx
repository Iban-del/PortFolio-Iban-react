
export interface BoxInterface {
    size?:Array<number>
}

const Box = ({
    size = [10,10,2]
}:BoxInterface) =>{

    return (
        <mesh>
            <boxGeometry args={size}></boxGeometry>
            <meshBasicMaterial color='hotpink' ></meshBasicMaterial>
        </mesh>
    )

}

export default Box