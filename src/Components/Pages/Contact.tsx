import { FaGithub } from "react-icons/fa6";
import Link from "../UI/Link";
import type { JSX } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

interface contactInterface {
    href:string,
    icon:JSX.Element,
    name:string,
}

const Contact = () =>{

    const iconSize = 120

    const contactList:Array<contactInterface> = [
        {
            href:"https://github.com/Iban-del",
            icon:<FaGithub scale={iconSize}/>,
            name:"github"
        },
        {
            href:"https://www.linkedin.com/in/iban-deletoille-elizalde-2a5780335",
            icon:<FaLinkedin scale={iconSize} />,
            name:"linkedin"
        },
        {
            href:"mailto:deletoilleelizaldeiban@gmail.com",
            icon:<IoIosMail scale={iconSize} />,
            name:"mail"
        },
        {
            href:"https://discordapp.com/users/764769604635459584",
            icon:<FaDiscord scale={iconSize} />,
            name:"discord"
        }
    ]

    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <hr className="h-px my-8 border-0 bg-gray-700 w-[90%]"></hr>
            <div className="h-[20%]">
                <h4 className="text-2xl font-bold">Contactez-moi</h4>
            </div>
            
            <div className="flex justify-evenly items-center w-[90%] mt-7">
                    {
                        contactList.map((e)=>{
                            return <Link  key={e.name+"-contact"} href={e.href} text={e.icon}></Link>
                        })
                    }
            </div>
        </div>
    )

}

export default Contact