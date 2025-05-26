import { useThreeUi } from "../../../context/ThreeUiContex"
import Sphere from "../UI/Sphere"

//initialisation de tous les composants généric (sphere, fusée,...)
const GenericThreeUI = () =>{

    const {MainPlanet} = useThreeUi()

    return(
        <>
            <Sphere ref={MainPlanet.mesh} position={MainPlanet.defaultCoordinate} materialArgs={{emissive:"#fff",emissiveIntensity:1}} sphereArgs={[0.5,32,16,0,Math.PI*2,0,Math.PI]} />

        </>
    )

}

export default GenericThreeUI