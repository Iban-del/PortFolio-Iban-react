import { useMemo, type JSX } from "react"
import { FaReact } from "react-icons/fa";
import Card from "../UI/Card";
import { AnimatePresence } from "motion/react";
import { SiTypescript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiRedis } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLinesLeaning } from "react-icons/fa6";
import { IoLeafSharp } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";


interface ProjectInterface {
    title:string,
    content:JSX.Element|string,
    popUpContent:string,
}



const Project = () =>{

    const cardSize = [300,300]

    const SkillsList: Array<ProjectInterface> = [
        {
            title: "Gestion Enseignants",
            content: <ProjetDescription text="Création d’un outil numérique pour la gestion des activités d’enseignement du personnel universitaire." languages={[<IoLeafSharp />, <FaLinesLeaning />, <GrMysql />, <IoLogoJavascript />]} />,
            popUpContent: "Ce projet vise à faciliter la gestion des plannings, des cours et des affectations des enseignants dans un cadre universitaire à l’aide de technologies web robustes et dynamiques."
        },
        {
            title: "Coeur Applicatif",
            content: <ProjetDescription text="Conception d’un noyau applicatif réutilisable pour initier de nouveaux projets." languages={[<FaReact />, <FaLinesLeaning />, <GrMysql />, <RiTailwindCssFill />, <SiTypescript />]} />,
            popUpContent: "Développement d’un socle applicatif modulaire et maintenable, conçu pour accélérer la mise en place de futurs projets tout en assurant une base solide et cohérente."
        },
        {
            title: "PortFolio",
            content: <ProjetDescription text="Création d’un portfolio personnel pour présenter mes compétences et projets, dans un univers visuel qui me correspond." languages={[<FaReact />, <SiTypescript />, <RiTailwindCssFill />]} />,
            popUpContent: "Un site web personnel conçu pour refléter mes compétences techniques, mon identité visuelle et mes réalisations, avec une navigation fluide et une interface moderne."
        },
        {
            title: "ServerRoomFan",
            content: <ProjetDescription text="Conception d’un système automatisé de refroidissement pour salle serveur, accompagné d’une interface de contrôle." languages={[<DiRedis />, <FaPython />, <IoLogoJavascript />, <ImHtmlFive />, <SiCss3 />]} />,
            popUpContent: "Système intelligent combinant automatisation physique et interface web pour surveiller et réguler la température d’une salle serveur, garantissant sécurité et efficacité énergétique."
        }
    ]


    const skills = useMemo(()=>{
        const list:Array<JSX.Element> = []
        SkillsList.forEach(project => {
            list.push(
                <div key={project.title+"-d"} className="flex justify-center items-center">
                    <Card usePopUp={true} popUpContent={project.popUpContent} popUpIcon={<GoProjectRoadmap />}  key={project.title} size={cardSize} title={project.title} >{project.content}</Card>
                </div>
            )
        })
        return list
    },[])




    return (
        <div className="p-4 h-full flex flex-col justify-evenly items-center ">
            <div className="h-[10%]">
                <h4 className="text-4xl font-bold">PROJETS</h4>
            </div>
            <div className="h-[100px] "></div>
            <div className="h-[90%] w-full mb-7 flex flex-col justify-between">
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