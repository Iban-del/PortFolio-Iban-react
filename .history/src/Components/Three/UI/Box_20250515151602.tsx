
export interface BoxInterface {
    size?:boxGeometry.args,
    color?:string
}

const Box = ({
    size = [1,1,1],
    color = 'hotpink'
}:BoxInterface) =>{

    return (
        <mesh>
            <boxGeometry args={size}></boxGeometry>
            <meshBasicMaterial color={color}></meshBasicMaterial>
        </mesh>
    )

}

export default Box