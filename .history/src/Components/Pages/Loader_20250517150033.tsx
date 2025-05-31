import { useProgress } from "@react-three/drei";


const Loader = () =>{

    const { progress } = useProgress();

    return <div className="text-green-1   z-[99]">
        hooo boo
    </div>
}

export default Loader