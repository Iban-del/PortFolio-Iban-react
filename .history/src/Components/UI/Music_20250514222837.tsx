import { useEffect, useRef } from "react"

interface MusicInterface{
    src:string
} 

const Music = ({
    src
}:MusicInterface) =>{

    const audio = useRef<HTMLAudioElement>(null);

    useEffect(()=>{
        if(audio.current){
            audio.current.loop = true
        }
        console.log(audio)
    },[audio])

    return <audio ref={audio} src={src} loop autoPlay></audio>
}

export default Music