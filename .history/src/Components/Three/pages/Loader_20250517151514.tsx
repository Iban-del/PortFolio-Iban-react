import { Html, useProgress } from "@react-three/drei";



const Loader = () =>{

    const {progress} = useProgress()
    console.log("test")
    return (
        <Html className="w-[100%] h-[100%] bg-dark z-[99]">
            <div className="w-[100%] h-[100%] bg-dark z-[99]">
                sdsd
            </div>
        </Html>
    )
}

export default Loader