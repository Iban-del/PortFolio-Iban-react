import { useProgress } from "@react-three/drei";


const Loder = () =>{

    const { progress } = useProgress();

    return  <div className="fullscreen-loader">
        Chargement 3D... {Math.round(progress)}%
    </div>
}

export default Loder