import { useProgress } from "@react-three/drei";


const Loader = () =>{

    const { progress } = useProgress();
    console.log("test")
    return <h2 className="bg-green-1  " >🌀 Chargement...</h2>;
}

export default Loader