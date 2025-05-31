import type React from "react"



interface LineInterface{
    color?:string    
}

const Line: React.FC<LineInterface> = ({
    color = "black"
}) => {


    return (
        <line>

        </line>
    )

}

export default Line