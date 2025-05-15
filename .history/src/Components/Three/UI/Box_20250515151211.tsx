
export interface BoxInterface {
    size:Array<number>
}

const Box = ({
    size
}) =>{

    return (
        <mesh>
            <boxGeometry args={size}></boxGeometry>
            <meshBasicMaterial color='hotpink' ></meshBasicMaterial>
        </mesh>
    )

}

export default Box