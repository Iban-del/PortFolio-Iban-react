import { motion } from "motion/react"
import type React from "react"
import { useEffect, useMemo, useState, type JSX } from "react"
import { classNames } from "../../Core/Tools"


interface ScrollPointsIntertface {
    numberELements:number,
    onScroll?: () => void,
}

interface PointInterface{
    active?:boolean
}

const ScrollPoints: React.FC<ScrollPointsIntertface> = ({
    numberELements
}) =>{

    const [state,setState] = useState<number>(0)

    const points = useMemo(()=>{
        const points = [];
        for(let i = 0; i < numberELements; i++){
            const current = state === i;
            points.push(<Point active={current} key={i}></Point>)
        }
        return points
    },[state])


    useEffect(()=>{
        window.addEventListener("scroll",(e)=>{
            console.log("test")
            e.preventDefault()
            setState((e)=>e+1)
        })
    })

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
    active = false
}) =>{

    return <div className={classNames("w-[13px] h-[13px] rounded-[90px] m-2 flex justify-center items-center",active? "bg-green-contrast" : "bg-green-contrast-a")}>
        <div className={classNames("w-[10px] h-[10px] rounded-[90px] bg-green-contrast bg-green-1  ")}>

        </div>
    </div>
}

export default ScrollPoints