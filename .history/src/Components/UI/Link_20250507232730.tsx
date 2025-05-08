

interface linkParameters{
    text:string,
    href:string,
    className:string
}

const Link = ({
    text,
    href = "#" ,
    className = ""
}:linkParameters) =>{
    return <>
        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
    </>
    
}

export default Link