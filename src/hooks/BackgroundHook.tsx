import { useContext } from "react"
import { ScaleContext } from "../context/BackgroundContext"


const BackgroundHook = () =>{

    const scale = useContext(ScaleContext)

    

    return {
        scale,
    }
}

export default BackgroundHook