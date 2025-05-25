import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import ApplicationHook from "../../hooks/ApplicationHook";
import { useThree } from "@react-three/fiber";



interface ListenerInterface{
    onScrollUp:()=>void,
    onScrollDown:()=>void,
    activeScroll:number,
    setActiveScroll:(e:number)=>void
}

const ScrollListener = ({
    onScrollUp,
    onScrollDown,
    activeScroll,
    setActiveScroll
}:ListenerInterface) =>{

    const {scrollValue,updateScroll} = ApplicationHook()
    const {camera} = useThree()
    const points = document.querySelectorAll("[id=points-r]")

    const onWheel = (e?:WheelEvent,del?:number,n?:number) => {
        if (activeScroll) {
            setActiveScroll(0)
            const delta = e?e.deltaY:del;
            const newValue = ScrollDirection(delta,scrollValue.numberScrollELements,n??scrollValue.state,
                () =>{onScrollUp()},
                () =>{onScrollDown()},
                () =>setActiveScroll(1)
            )
            if (newValue !== scrollValue.state) {
                updateScroll("stageBefore", scrollValue.state);
                updateScroll("state", newValue);
            }
        }
    };

    useEffect(()=>{
        
        for (let i = 0; i < points.length; i++) {
            points[i].addEventListener("click",(e)=>{
                //console.log(scrollValue,i)
                onWheel(undefined,i-scrollValue.state,i-1)
            });
        }
    },[scrollValue,activeScroll,camera])

    useEffect(()  => {  
        

        window.addEventListener("wheel", onWheel,{ passive: true });

        if(!activeScroll)window.removeEventListener("wheel", onWheel);

        return () => {
            window.removeEventListener("wheel", onWheel);
        };
    }, [scrollValue, activeScroll,camera]);

    return null;
}


const ScrollDirection = (
    delta:number,
    max:number,
    value:number,
    onScrollUp?:()=>void,
    onScrollDown?:()=>void,
    onNotChange?:()=>void
) =>{
    let returnValue;

    if(delta > 0){
        returnValue = value+1;
        onScrollDown && onScrollDown()
    }else{
        returnValue = value-1;
        onScrollUp && onScrollUp()
    }

    if(returnValue < 0){
        returnValue = 0
        onNotChange && onNotChange()
    }else if(returnValue >= max){
        returnValue = max
        onNotChange && onNotChange()
    }

    return returnValue
}



export default ScrollListener



// import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
// import ApplicationHook from "../../hooks/ApplicationHook";
// import { useThree } from "@react-three/fiber";



// interface ListenerInterface{
//     onScrollUp:()=>void,
//     onScrollDown:()=>void,
//     activeScroll:number,
//     setActiveScroll:(e:number)=>void
// }

// const ScrollListener = ({
//     onScrollUp,
//     onScrollDown,
//     activeScroll,
//     setActiveScroll
// }:ListenerInterface) =>{

//     const {scrollValue,updateScroll} = ApplicationHook()
//     const {camera} = useThree()
//     const points = document.querySelectorAll("[id=points-r]")

//     const onWheel = (e:Event,del?:number) => {
//         if (activeScroll) {
//             setActiveScroll(0)
//             const delta = del ?? e.clientY
//             const newValue = ScrollDirection(delta,scrollValue.numberScrollELements,scrollValue.state,
//                 () =>{onScrollUp()},
//                 () =>{onScrollDown()},
//                 () =>setActiveScroll(1)
//             )
//             if (newValue !== scrollValue.state) {
//                 updateScroll("stageBefore", scrollValue.state)
//                 updateScroll("state", newValue);
//             }
//         }
//     };

//     useEffect(()=>{
//         for (let i = 0; i < points.length; i++) {
//             points[i].addEventListener("click",(e)=>onWheel(e,scrollValue.state-scrollValue.stageBefore));
//         }
//     },[scrollValue])

//     useEffect(()  => {  
        

//         window.addEventListener("wheel",onWheel,{ passive: true });

//         if(!activeScroll)window.removeEventListener("wheel",onWheel);

//         return () => {
//             window.removeEventListener("wheel",onWheel);
//         };
//     }, [scrollValue, activeScroll,camera]);

//     return null;
// }


// const ScrollDirection = (
//     delta:number,
//     max:number,
//     value:number,
//     onScrollUp?:()=>void,
//     onScrollDown?:()=>void,
//     onNotChange?:()=>void
// ) =>{
//     let returnValue;

//     if(delta > 0){
//         returnValue = value+1;
//         onScrollDown && onScrollDown()
//     }else{
//         returnValue = value-1;
//         onScrollUp && onScrollUp()
//     }

//     if(returnValue < 0){
//         returnValue = 0
//         onNotChange && onNotChange()
//     }else if(returnValue >= max){
//         returnValue = max
//         onNotChange && onNotChange()
//     }

//     return returnValue
// }



// export default ScrollListener