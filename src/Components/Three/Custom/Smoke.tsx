import { useMemo, type JSX } from "react"
import Box from "../UI/Box"
import MeshComponent from "../UI/MeshComponent"
import { useLoader } from '@react-three/fiber'
import { MathUtils, Mesh, TextureLoader } from 'three'
import type { Coordinate } from "../Core/Type"
import smoke from '../../../assets/smoke.png';


interface SmokeInterface{
    numberElement?:number
    velocityFactor?:number
    position?:Coordinate
    delta?:number
    size?:number
    opacity?:number
    color?:string
}

const Smoke = ({
    numberElement = 10,
    velocityFactor = 500,
    delta = 5,
    size = 15,
    opacity = 0.5,
    position = [0,0,0],
    color = '#fff'
}:SmokeInterface) =>{

    const smokeTexture = useLoader(TextureLoader,smoke)
    if (!smokeTexture) return null

    const moveSmoke = async (mesh:Mesh,n:number) =>{
        mesh.rotateZ(n)
    }

    const smokeContainer = useMemo(()=>{
        const list:Array<JSX.Element> = []
        for(let i = 0; i < numberElement; i++){
            const n =Math.floor(Math.random() * 3) - 1;
            const position:Coordinate = [MathUtils.randFloatSpread(delta),MathUtils.randFloatSpread(delta),0]
            list.push(<Box color={color} boxArgs={[size,size,0.001]} key={i+"-smoke"} position={position} onFrame={mesh=>moveSmoke(mesh,n/velocityFactor)}  materialArgs={{map:smokeTexture,transparent:true,opacity:opacity}} ></Box>)
        }
        return list
    },[])

    return (
        <MeshComponent position={position}>
            {smokeContainer}
        </MeshComponent>
    )

}

export default Smoke