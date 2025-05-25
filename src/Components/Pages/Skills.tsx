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

interface inputType  {
    back:boolean,
    front:boolean,
    tool:boolean
}

interface SkillsInterface {
    title:string,
    content:JSX.Element,
    type:"front"|"back"|"tool"
}

const SkillsList:Array<SkillsInterface> = [
    {title:"React",content:<FaReact />,type:"front"},
    {title:"JavaScript",content:<IoLogoJavascript />,type:"front"},
    {title:"TypeScript",content:<SiTypescript />,type:"front"},
    {title:"ExtJs",content:<IoLeafSharp  />,type:"front"},
    {title:"HTML",content:<ImHtmlFive  />,type:"front"},
    {title:"CSS",content:<SiCss3 />,type:"front"},
    {title:"PHP",content:<RiPhpFill />,type:"back"},
    {title:"Laminas",content:<FaLinesLeaning />,type:"back"},
    {title:"Python",content:<FaPython />,type:"back"},
    {title:"C",content:<TbCircleDashedLetterC />,type:"back"},
    {title:"SQL",content:<GrMysql />,type:"back"},
    {title:"Redis",content:<DiRedis />,type:"tool"},
    {title:"Github",content:<FaGithub />,type:"tool"},
]



const Skills = () =>{

    const [type,setType] = useState<inputType>({back:true,front:true,tool:true})

    const skills = useMemo(()=>{

        const list:Array<JSX.Element> = []
        SkillsList.forEach(skill => {
            if(type[skill.type]){
                list.push(<Card key={skill.title} title={skill.title} >{skill.content}</Card>)
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
                <h4 className="text-2xl font-bold">SKILLS</h4>
            </div>
            <div className="h-[90%] w-full flex flex-col justify-between">
                <div className="w-full mb-7 mt-7">
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