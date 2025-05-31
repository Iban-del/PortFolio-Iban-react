interface MusicInterface{
    src:string
} 

const Music = ({

}:MusicInterface) =>{

    <audio id="backgroundAudio" src="./backgroungMusic.mp3" loop autoPlay></audio>
}

export default Music