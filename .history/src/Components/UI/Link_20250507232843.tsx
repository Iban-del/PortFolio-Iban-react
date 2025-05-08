import { classNames } from "../../Tools/Tools"


interface linkParameters{
    text:string,
    href:string,
    className:string,
    useAnnimation:boolean
}

const Link = ({
    text,
    href = "#" ,
    className = ""
}:linkParameters) =>{
    return <>
        <a href={href} className={classNames("font-medium text-blue-600 dark:text-blue-500 hover:underline",className)}>
            {text}
        </a>
    </>
    
}

export default Link