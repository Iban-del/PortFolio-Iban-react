import { useEffect, useRef } from "react"

interface MusicInterface{
    src:string
} 

const Music = ({
    src
}:MusicInterface) =>{

    const audio = useRef(null);

    useEffect(()=>{
        console.log(audio.current)
    },[audio])

    return <audio ref={audio} src={src} loop autoPlay></audio>
}

export default Music