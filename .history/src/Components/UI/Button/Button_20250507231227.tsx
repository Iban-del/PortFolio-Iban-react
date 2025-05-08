import {classNames} from "../../../Tools/Tools"

interface buttonParameters {
    text:string
    onClick?:()=>void,
    className?:string,
    
}

const Button = ({
    text,
    onClick,
    className
}:buttonParameters) => {

    classNames()

    return <button>
        {text}
    </button>
} 

export default Button