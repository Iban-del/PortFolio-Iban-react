import { useContext } from "react"
import { ScrollContext } from "../context/ScrollContext"


const ApplicationHook = () =>{

    const state = useContext(ScrollContext)

    return {
        state
    }
}

export default ApplicationHook