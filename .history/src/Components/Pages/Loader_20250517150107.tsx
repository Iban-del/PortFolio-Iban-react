import { useProgress } from "@react-three/drei";


const Loader = () =>{

    const { progress } = useProgress();

    return <h2>🌀 Chargement...</h2>;
}

export default Loader