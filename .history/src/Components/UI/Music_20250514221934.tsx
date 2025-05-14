interface MusicInterface{
    src:string
} 

const Music = ({
    src
}:MusicInterface) =>{


    return <audio id="backgroundAudio" src={src} loop autoPlay></audio>
}

export default Music