
export interface BoxInterface {
    size?:Array<number>,
    color?:string
}

const Box = ({
    size = [1,1,1]
}:BoxInterface) =>{

    return (
        <mesh>
            <boxGeometry args={size}></boxGeometry>
            <meshBasicMaterial color='hotpink' ></meshBasicMaterial>
        </mesh>
    )

}

export default Box