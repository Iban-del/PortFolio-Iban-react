import React, { useMemo } from "react"
import GroupComponent from "../UI/GroupComponent"
import ParticleGroup from "../Custom/ParticleGroup"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import { useThreeUi } from "../../../context/ThreeUiContex"
import { ChangeSize, MoveTo } from "../Annimation/AnnimationCallback"
import { SCROLL_STEP } from "../../../Core/GlobalConstant"
// import MoonSurface from "../Custom/3D/MoonSurface"
import Smoke from "../Custom/Smoke"
import Box from "../UI/Box"
import type { Vector3 } from "@react-three/fiber"
import type { Mesh } from "three"



const Moon = ({
    position = 0,
}:PagesProps) =>{

    
    const {MainPlanet} = useThreeUi()
    const coordinateCube:Array<Vector3>=[
        [-4, 1, -3],
        [3, 3, -4],
        [-4, 0, 4],
        [5, 2, 2],
        [-3, -3, -1],
        [2, -1, 3],
        [-3, 3, -4],
        [4, 0, -2]
    ]
    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])
    const moveBox = async (mesh:Mesh,n:number) =>{
        mesh.rotateZ(n)
        mesh.rotateY(n)
        mesh.rotateX(n)
    }

    const BoxList = useMemo(()=>{
        const cubeList:Array<React.ReactElement> = []
        coordinateCube.forEach(element=>{
            cubeList.push(<Box key={Math.random()+"-box"} position={element} onFrame={mesh=>moveBox(mesh,0.001*Math.PI)}/>)
        })
        return cubeList
    },[])

  

    return (
        <GroupComponent
            position={[0,position,-SCROLL_STEP]}
        >
            <ScrollStage coordinate={[0,position,-SCROLL_STEP+10]} stateScroll={5} onStage={()=>{
                if(MainPlanet.mesh.current){
                    ChangeSize(MainPlanet.mesh.current,1)
                    MoveTo([0,position,-SCROLL_STEP+7],MainPlanet.mesh.current)
                }
            }}/>
            {/* <MoonSurface position={[0,-4,-20]}/> */}
            {BoxList}
            
            <Smoke numberElement={8} position={[0,-10,8]}/>
            {particleGroup}
        </GroupComponent>
    )

}


export default Moon