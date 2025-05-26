import { useMemo, useRef, useState, type JSX } from "react"
import { FaReact } from "react-icons/fa";
import CheckBoxGroup, { type inputInterface } from "../UI/CheckBoxGroup";
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
import { RiTailwindCssFill } from "react-icons/ri";
interface inputType  {
    back:boolean,
    front:boolean,
    tool:boolean
}

interface SkillsInterface {
    title:string,
    content:JSX.Element,
    popUpContent:string,
    type:"front"|"back"|"tool"
}

const SkillsList:Array<SkillsInterface> = [
    {
        title: "React",
        content: <FaReact />,
        type: "front",
        popUpContent: "React est une bibliothèque JavaScript utilisée pour construire des interfaces utilisateur dynamiques et performantes, principalement pour les applications web monopages."
    },
    {
        title: "JavaScript",
        content: <IoLogoJavascript />,
        type: "front",
        popUpContent: "JavaScript est un langage de programmation essentiel du web, permettant d’ajouter de l’interactivité, de manipuler le DOM et de gérer les comportements côté client."
    },
    {
        title: "TypeScript",
        content: <SiTypescript />,
        type: "front",
        popUpContent: "TypeScript est un sur-ensemble de JavaScript qui ajoute le typage statique et permet une meilleure maintenabilité et détection d’erreurs lors du développement."
    },
    {
        title: "ExtJs",
        content: <IoLeafSharp />,
        type: "front",
        popUpContent: "Ext JS est un framework JavaScript robuste utilisé pour créer des interfaces riches et complexes, particulièrement adapté aux applications d'entreprise."
    },
    {
        title: "HTML",
        content: <ImHtmlFive />,
        type: "front",
        popUpContent: "HTML (HyperText Markup Language) est le langage de base du web, utilisé pour structurer et organiser le contenu des pages web."
    },
    {
        title: "Tailwindcss",
        content: <RiTailwindCssFill />,
        type: "front",
        popUpContent: "Tailwind CSS est un framework utilitaire-first qui permet de construire des interfaces rapidement grâce à des classes pré-définies directement dans le HTML."
    },
    {
        title: "CSS",
        content: <SiCss3 />,
        type: "front",
        popUpContent: "CSS (Cascading Style Sheets) permet de styliser les éléments HTML en contrôlant leur apparence visuelle, comme les couleurs, les marges et les polices."
    },
    {
        title: "PHP",
        content: <RiPhpFill />,
        type: "back",
        popUpContent: "PHP est un langage de script côté serveur largement utilisé pour développer des applications web dynamiques et interagir avec des bases de données."
    },
    {
        title: "Laminas",
        content: <FaLinesLeaning />,
        type: "back",
        popUpContent: "Laminas est un framework PHP modulaire et orienté objets, utilisé pour créer des applications web sécurisées et performantes."
    },
    {
        title: "Python",
        content: <FaPython />,
        type: "back",
        popUpContent: "Python est un langage polyvalent et lisible, utilisé dans le développement web, l’analyse de données, l’intelligence artificielle et l’automatisation."
    },
    {
        title: "C",
        content: <TbCircleDashedLetterC />,
        type: "back",
        popUpContent: "Le langage C est un langage bas niveau très performant, utilisé pour développer des systèmes, des logiciels embarqués et des applications nécessitant un contrôle précis de la mémoire."
    },
    {
        title: "SQL",
        content: <GrMysql />,
        type: "back",
        popUpContent: "SQL (Structured Query Language) est un langage standard pour interagir avec les bases de données relationnelles afin de stocker, modifier ou interroger des données."
    },
    {
        title: "Redis",
        content: <DiRedis />,
        type: "tool",
        popUpContent: "Redis est une base de données en mémoire, rapide et légère, souvent utilisée comme cache ou système de gestion de files d’attente."
    },
    {
        title: "Github",
        content: <FaGithub />,
        type: "tool",
        popUpContent: "GitHub est une plateforme de gestion de code source basée sur Git, permettant la collaboration, le suivi des versions et l’intégration continue."
    }
]



const Skills = () =>{

    const [type,setType] = useState<inputType>({back:true,front:true,tool:true})

    const skills = useMemo(()=>{

        const list:Array<JSX.Element> = []
        SkillsList.forEach(skill => {
            if(type[skill.type]){
                list.push(
                    <div key={skill.title+"-d"} className="flex justify-center items-center">
                        <Card usePopUp={true} popUpContent={skill.popUpContent} popUpIcon={skill.content} key={skill.title} title={skill.title} >{skill.content}</Card>
                    </div>
                )
            }
        })
        return list
    },[type])

    const InputList:Array<inputInterface> = [
        {title:'Back',onChange:()=>{setType((e)=>{return {...e,back:!e.back}})}},
        {title:'Front',onChange:()=>{setType((e)=>{return {...e,front:!e.front}})}},
        {title:'Tools',onChange:()=>{setType((e)=>{return {...e,tool:!e.tool}})}}
    ]


    return (
        <div className="p-4 h-full flex flex-col justify-evenly items-center ">
            <div className="h-[10%]">
                <h4 className="text-4xl font-bold">SKILLS</h4>
            </div>
            <div className="h-[100px] "></div>
            <div className="h-[90%] w-full flex flex-col justify-between">
                <div className="w-full  mt-7">
                    <CheckBoxGroup defaultState={true} checkBoxList={InputList} />
                </div>
                <div className="w-full flex justify-center mb-7">
                    <div className="grid sm:grid-cols-5 grid-cols-2 sm:gap-10 gap-4 w-full ">
                        <AnimatePresence>
                            {skills}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default Skills