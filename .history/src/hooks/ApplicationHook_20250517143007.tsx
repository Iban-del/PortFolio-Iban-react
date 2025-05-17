import { useContext } from "react"
import { ScrollContext } from "../context/ScrollContext"


const ApplicationHook = () =>{

    const scroll = useContext(ScrollContext)

    return {
        scroll
    }
}

export default ApplicationHook