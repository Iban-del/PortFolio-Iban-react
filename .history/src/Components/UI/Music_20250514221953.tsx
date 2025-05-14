import { useRef } from "react"

interface MusicInterface{
    src:string
} 

const Music = ({
    src
}:MusicInterface) =>{

    const audio = useRef(undefined)

    return <audio id="backgroundAudio" src={src} loop autoPlay></audio>
}

export default Music