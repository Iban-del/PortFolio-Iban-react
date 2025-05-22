import type { DefaultGeometry } from "../Type";
import type { MeshComponentInterface } from "./MeshComponent";
import MeshComponent from "./MeshComponent";
import TextComponent from "./Text";

interface TextCardInterface extends MeshComponentInterface, DefaultGeometry{
    content:string
}


const TextCard = ({
    content,
    ...propsEvent
}:TextCardInterface) => {
    
    return (
        <MeshComponent
            {...propsEvent}
        >
            <TextComponent
                text={content}
                scale={0.18}
            />
        </MeshComponent>
    )
    
};


export default TextCard