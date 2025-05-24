import type React from "react"
import { useMemo } from "react"
import { classNames } from "../../Core/Tools"
import ApplicationHook from "../../hooks/ApplicationHook"



interface PointInterface{
    active?:boolean
    onClick:()=>void
}

const ScrollPoints = () =>{

    
    const {scrollValue,updateScroll} = ApplicationHook()

    const points = useMemo(()=>{
        const points = [];
        for(let i = 0; i <= scrollValue.numberScrollELements; i++){
            const current = scrollValue.state === i;
            points.push(<Point active={current} key={i} onClick={()=>{updateScroll("state",i)}} ></Point>)
        }
        return points
    },[scrollValue.state])


    return (
        <div className="fixed w-[100%] h-[100%] flex justify-end top-[0px] z-[-1]">
            <div className="w-[40px] flex flex justify-center items-center ">
                <div className="flex flex-col justify-around w-[100%]">
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
    return <div onClick={onClick} className={classNames("w-[13px] h-[13px] rounded-[90px] m-2 flex justify-center items-center",active? "bg-green-contrast" : "bg-green-contrast-a")}>
        <div className={classNames("w-[5px] h-[5px] rounded-[90px] bg-green-contrast-a flex justify-center items-center")}>
            
        </div>
    </div>
}

export default ScrollPoints