import { useMemo } from "react"
import MeshComponent from "../UI/MeshComponent"


interface WaveInterface {
    pointStep?:number;

}

const Wave = ({
    pointStep = 5
}:WaveInterface) =>{

    const points = useMemo(()=>{

    },[])

    return (
        <MeshComponent>

        </MeshComponent>
    )

}

export default Wave