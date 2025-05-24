import { useScroll, useScrollDispatch, type ScrollIndex, type ScrollValuesInterface } from "../context/ScrollContext"




const ApplicationHook = () =>{

    const scrollValue = useScroll()
    const scrollDispatch = useScrollDispatch()

    
    /** permet de mettre à jour les données du scroll */
    const updateScroll = (index:ScrollIndex,value:any) => {
        if (scrollDispatch) {
            scrollDispatch(prev => ({ ...prev, [index]: value }));
        }
    }

    return {
        scrollValue,
        updateScroll
    }
}

export default ApplicationHook