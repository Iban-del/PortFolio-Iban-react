import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html center position={[0,-10,0]}>
        
        <p className="text-white mt-2 font-semibold text-center">
            Chargement : {progress.toFixed(0)}%
        </p>
        <div className="w-screen bg-gray-300 rounded-full h-4 overflow-hidden shadow-md">
            <div
            className="bg-gray-600 h-4 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress.toFixed(0)}%` }}
            ></div>
        </div>
        
        </Html>
    );
};

export default Loader;
