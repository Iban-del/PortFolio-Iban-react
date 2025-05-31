import type React from "react"
import { useMemo } from "react"
import { classNames } from "../../Core/Tools"
import ApplicationHook from "../../hooks/ApplicationHook"



interface PointInterface{
    active?:boolean
    onClick:()=>void
}

const ScrollPoints = () =>{

    
    const {scrollValue,updateState} = ApplicationHook()

    const points = useMemo(()=>{
        const points = [];
        for(let i = 0; i <= scrollValue.numberScrollELements; i++){
            const current = scrollValue.state === i;
            points.push(<Point active={current}  key={i} onClick={()=>{updateState(i)}}  ></Point>)
        }
        return points
    },[scrollValue.state,scrollValue.numberScrollELements])


    return (
        <div className="fixed w-[100%] flex justify-end items-center z-4">
            <div className="w-[40px] flex flex justify-center items-center z-4">
                <div className="flex flex-col justify-around w-[100%] z-4">
                    {points}
                </div>
            </div>
        </div>
    )
}

const Point: React.FC<PointInterface> = ({
    active = false,
    onClick,
}) =>{
    return <div id="points-r" onClick={onClick} className={classNames("w-[13px] h-[13px] rounded-[90px] m-2 flex justify-center items-center cursor-pointer z-4 ",active? "bg-green-contrast" : "bg-green-contrast-a")}>
        <div className={classNames("w-[5px] h-[5px] rounded-[90px] bg-green-contrast-a flex justify-center items-center z-4")}>
            
        </div>
    </div>
}

export default ScrollPoints