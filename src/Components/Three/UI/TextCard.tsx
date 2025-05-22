import type { DefaultGeometry } from "../Type";
import type { MeshComponentInterface } from "./MeshComponent";

interface TextInterface extends MeshComponentInterface, DefaultGeometry{
    title?:string,
    content?:string
}


const TextCard = ({
    ...propsEvent
}) => {
    
    
};


export default TextCard