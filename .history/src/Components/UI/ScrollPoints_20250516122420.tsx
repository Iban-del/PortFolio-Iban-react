import { motion } from "motion/react"
import type React from "react"
import { useEffect, useState, type JSX } from "react"
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

    const [state,setState]
    
    const points = [];
    for(let i = 0; i < numberELements; i++){
        points.push(<Point key={i}></Point>)
    }

    console.log(points)

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

    
    
    return <div className={classNames("w-[13px] h-[13px] rounded-[90px] m-2 bg-green-contrast",active? "bg-green-contrast" : "bg-green-contrast-a")}>

    </div>
}

export default ScrollPoints