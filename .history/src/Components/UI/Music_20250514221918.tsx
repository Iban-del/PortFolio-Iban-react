interface MusicInterface{
    src:string
} 

const Music = ({
    src
}:MusicInterface) =>{

    <audio id="backgroundAudio" src="./backgroungMusic.mp3" loop autoPlay></audio>
}

export default Music