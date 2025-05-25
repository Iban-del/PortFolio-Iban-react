import { useMemo, useState, type JSX } from "react"
import { FaReact } from "react-icons/fa";
import Card from "../UI/Card";
import { AnimatePresence } from "motion/react";
import { SiTypescript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { RiPhpFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiRedis } from "react-icons/di";
import { FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLinesLeaning } from "react-icons/fa6";
import { IoLeafSharp } from "react-icons/io5";
import { TbCircleDashedLetterC } from "react-icons/tb";




interface ProjectInterface {
    title:string,
    content:JSX.Element|string,

}



const Project = () =>{

    const cardSize = [300,300]

    const SkillsList:Array<ProjectInterface> = [
    {title:"Gestion Enseigants",content:<ProjetDescription text="Gestionnaire d'enseignement pour les personnelles d'une fac" languages={[<IoLeafSharp/>,<FaLinesLeaning/>]} />},
    {title:"Coeur Applicatif",content:<FaReact />},
    {title:"PortFolio",content:<FaReact />},
    {title:"ServerRoomFan",content:<FaReact />},
]

    const skills = useMemo(()=>{
        const list:Array<JSX.Element> = []
        SkillsList.forEach(skill => {
            list.push(<Card key={skill.title} size={cardSize} title={skill.title} >{skill.content}</Card>)
        })
        return list
    },[])




    return (
        <div className="p-4 h-full flex flex-col justify-evenly items-center ">
            <div className="h-[10%]">
                <h4 className="text-2xl font-bold">PROJETS</h4>
            </div>
            <div className="h-[90%] w-full mt-7 mb-7 flex flex-col justify-between">
                <div className="w-full flex justify-center mb-7">
                    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-4 w-full ">
                        <AnimatePresence>
                            {skills}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

const ProjetDescription = ({
    text,
    languages
}:{text:string,languages:Array<JSX.Element>}) =>{

    return(
        <div className="h-full w-[90%] ">
            <div className="w-full flex justify-center">
                {text}
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="w-full flex justify-center">
                {
                    languages.map((e)=>{
                        return <span key={Math.random()} className="m-2"> {e} </span>
                    })
                }
            </div>
        </div>
    )
}

export default Project