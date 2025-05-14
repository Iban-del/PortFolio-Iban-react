import { useRef } from "react"

interface MusicInterface{
    src:string
} 

const Music = ({
    src
}:MusicInterface) =>{

    const audio = useRef(undefined)

    return <audio ref={audio.current} src={src} loop autoPlay></audio>
}

export default Music