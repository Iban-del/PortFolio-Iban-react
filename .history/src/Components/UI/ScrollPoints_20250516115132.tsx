import { motion } from "motion/react"
import type React from "react"
import { useEffect, useState } from "react"


interface ScrollPointsIntertface {
    numberELements:number,
    onScroll?: () => void,
}

interface PointInterface{
    active?:boolean
}

const ScrollPoints: React.FC<ScrollPointsIntertface> = ({

}) =>{

    const [points,setPoints] = useState()

    useEffect(()=>{
        
    })

    return (
        <div className="fixed w-[100%] h-[100%] flex justify-end top-[0px] z-[-1]">
            <div className="w-[20px] flex flex justify-center items-center ">
                <div className="flex flex-col justify-around w-[100%] h-[20%]">
                    <Point></Point>
                    <Point></Point>
                    <Point></Point>
                    <Point></Point>
                    <Point></Point>
                    <Point></Point>
                    <Point></Point>
                </div>
            </div>
        </div>
    )
}

const Point: React.FC<PointInterface> = ({
    active = false
}) =>{



    return <div className="w-[10px] h-[10px] rounded-[90px]">

    </div>
}

export default ScrollPoints