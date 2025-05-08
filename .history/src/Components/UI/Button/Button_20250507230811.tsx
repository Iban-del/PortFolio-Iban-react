

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

    return <button>

    </button>
} 

export default Button