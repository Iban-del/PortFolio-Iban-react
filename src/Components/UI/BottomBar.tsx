import { LazyMotion, domAnimation, motion } from "framer-motion";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useApplication } from "../../context/ApplicationContext";

interface BottomBarInterface {
    click: () => void;
}

    const BottomBar = ({ click }: BottomBarInterface) => {
    const { view } = useApplication();

    return (
        <LazyMotion features={domAnimation}>
        <motion.div
            className="w-screen h-30 absolute inset-x-0 z-100"
            initial={{ bottom: -90 }}
            animate={{ bottom: 0 }}
            exit={{ bottom: -90 }}
        >
            <div className="flex w-full h-full justify-center items-center">
            {!view && (
                <SlArrowDown onClick={click} className="cursor-pointer" size={50} />
            )}
            {view && (
                <SlArrowUp onClick={click} className="cursor-pointer" size={50} />
            )}
            </div>
        </motion.div>
        </LazyMotion>
    );
};

export default BottomBar;
