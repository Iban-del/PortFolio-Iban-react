import { Html, useProgress } from "@react-three/drei";



const Loader = () =>{

    const {progress} = useProgress()

    return (
        <Html>
            <div className="w-[100%] h-[100%] bg-dark">
                sdsd
            </div>
        </Html>
    )
}

export default Loader