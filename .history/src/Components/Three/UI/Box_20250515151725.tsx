type BoxGeometryArgs = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
];

export interface BoxInterface {
    size?:BoxGeometryArgs,
    color?:string
}

const Box = ({
    size = [1,1,1,9],
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