import { useContext } from "react"
import { ScrollContext } from "../context/ScrollContext"


const ApplicationHook = () =>{

    const scroll = useContext(ScrollContext)
    const numberScrollELements = 9

    return {
        scroll
    }
}

export default ApplicationHook