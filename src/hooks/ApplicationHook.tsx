import { useApplicationDispatch, type ApplicationIndex } from "../context/ApplicationContext"
import { useScroll, useScrollDispatch, type ScrollIndex, type ScrollValuesInterface } from "../context/ScrollContext"




const ApplicationHook = () =>{

    const scrollValue = useScroll()
    const scrollDispatch = useScrollDispatch()
    const applicationDispatch = useApplicationDispatch()
    
    /** permet de mettre à jour les données du scroll */
    const updateScroll = (index:ScrollIndex,value:any) => {
        if (scrollDispatch) {
            scrollDispatch(prev => ({ ...prev, [index]: value }));
        }
    }

    /** met à jour le state et le stateBefore */
    const updateState = (value:number) => {
        if (scrollDispatch) {
            scrollDispatch(prev => ({ ...prev, state: value, stageBefore:prev.state}));
        }
    }

    const updateApplication = (index:ApplicationIndex,value:any) =>{
        if (applicationDispatch) {
            applicationDispatch(prev => ({ ...prev, [index]: value }));
        }
    }

    return {
        scrollValue,
        updateScroll,
        updateState,
        updateApplication
    }
}

export default ApplicationHook