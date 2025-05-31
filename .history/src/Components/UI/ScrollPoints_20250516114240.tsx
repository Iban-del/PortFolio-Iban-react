import { motion } from "motion/react"


interface ScrollPointsIntertface {

}

interface PointInterface{

}

const ScrollPoints = ({

}) =>{

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

const Point = ({

}) =>{
    return <div className="w-[10px] h-[10px] rounded-[90px] bg-green-contrast">

    </div>
}

export default ScrollPoints