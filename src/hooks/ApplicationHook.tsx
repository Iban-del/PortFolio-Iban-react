import { useContext } from "react"
import { ScrollContext } from "../context/ScrollContext"


const ApplicationHook = () =>{

    const scroll = useContext(ScrollContext)
    const numberScrollELements = 9
    const scrollStep = 40;

    return {
        scroll,
        numberScrollELements,
        scrollStep
    }
}

export default ApplicationHook